import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DrupalClient } from 'next-drupal';

// Load environment variables from .env file
import { config } from 'dotenv';
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function loadEnvFile() {
  const envPath = path.join(projectRoot, '.env');
  try {
    const envContent = await fs.readFile(envPath, 'utf8');
    const lines = envContent.split('\n');
    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=');
          process.env[key] = value;
        }
      }
    }
  } catch (error) {
    console.warn('Warning: Could not load .env file:', error.message);
  }
}

function toMenuMachineName(value) {
  const convertedValue = value === 'Odds and Ends' ? 'Odds Ends' : value;
  const transformedValue = convertedValue
    .toLowerCase()
    .trim()
    .split(' ')
    .join('-')
    .replace(/[^a-z0-9-]/g, '');
  if (
    transformedValue === 'fate-horror-toolkit' ||
    transformedValue === 'fate-accessibility-toolkit' ||
    transformedValue === 'fate-space-toolkit'
  ) {
    return transformedValue;
  }
  return `menu-${transformedValue}`;
}

async function findRuleBookTitles() {
  const pagesDir = path.join(projectRoot, 'src', 'pages');
  const entries = await fs.readdir(pagesDir, { withFileTypes: true });
  const titles = new Set();

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const indexPath = path.join(pagesDir, entry.name, 'index.js');
    try {
      const content = await fs.readFile(indexPath, 'utf8');
      const match = content.match(/const\s+title\s*=\s*'([^']+)'/);
      if (match && match[1]) {
        titles.add(match[1]);
      }
    } catch (_) {
      // ignore missing index.js
    }
  }

  return Array.from(titles);
}

async function fetchMenus(titles) {
  const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL;
  if (!baseUrl) {
    throw new Error('Missing NEXT_PUBLIC_DRUPAL_BASE_URL env var.');
  }
  const drupal = new DrupalClient(baseUrl, {
    previewSecret: process.env.DRUPAL_PREVIEW_SECRET,
  });

  async function discoverAllMenuMachineNames() {
    const candidates = [
      `${baseUrl.replace(/\/$/, '')}/jsonapi/menu/menu`,
      `${baseUrl.replace(/\/$/, '')}/jsonapi/menus/menu`,
    ];
    for (const url of candidates) {
      try {
        const res = await fetch(url, { headers: { accept: 'application/vnd.api+json' } });
        if (!res.ok) continue;
        const body = await res.json();
        if (Array.isArray(body?.data)) {
          const names = body.data
            .map((item) => {
              const uuidOrId = item?.attributes?.drupal_internal__id || item?.attributes?.id || item?.id;
              const label = item?.attributes?.label;
              // Prefer deriving from label when available, since next-drupal.getMenu expects machine names like "menu-foo"
              if (label) {
                return toMenuMachineName(label);
              }
              return uuidOrId;
            })
            .filter(Boolean)
            // Filter out UUID-like values which are not valid machine names for getMenu
            .filter((name) => !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(name));
          if (names.length > 0) return Array.from(new Set(names));
        }
      } catch (_) {
        // try next candidate
      }
    }
    // eslint-disable-next-line no-console
    console.warn('Warning: Could not discover menus via JSON:API. Falling back to titles-derived menus.');
    return [];
  }

  const discovered = await discoverAllMenuMachineNames();

  const titlesDerived = titles.map((t) => toMenuMachineName(t));
  const allMenuNames = Array.from(new Set([...discovered, ...titlesDerived]));

  const results = {};
  for (const machine of allMenuNames) {
    try {
      const { tree } = await drupal.getMenu(machine);
      results[machine] = tree || {};
    } catch (err) {
      // If a menu doesn't exist, keep it as empty
      results[machine] = {};
      // eslint-disable-next-line no-console
      console.warn(`Warning: failed to fetch menu "${machine}":`, err.message || err);
    }
  }
  return results;
}

function serializeStaticMenusObject(obj) {
  // Pretty-print with stable JSON, but as JS object literal
  const json = JSON.stringify(obj, null, 2)
    .replace(/"(\w+)":/g, '"$1":')
    .replace(/\\n/g, '\n');
  return json;
}

async function writeStaticMenusFile(menus) {
  const libDir = path.join(projectRoot, 'lib');
  const target = path.join(libDir, 'static-menus.js');
  const content = `export const STATIC_MENUS = ${serializeStaticMenusObject(menus)};\n\nexport function toMenuMachineName(value) {\n  let convertedValue = value === 'Odds and Ends' ? 'Odds Ends' : value;\n  const transformedValue = convertedValue.toLowerCase().split(' ').join('-');\n  if (\n    transformedValue === 'fate-horror-toolkit' ||\n    transformedValue === 'fate-accessibility-toolkit' ||\n    transformedValue === 'fate-space-toolkit'\n  ) {\n    return transformedValue;\n  }\n  return \`menu-\${transformedValue}\`;\n}\n\nexport function getStaticMenuByValue(value) {\n  const machineName = toMenuMachineName(value);\n  return STATIC_MENUS[machineName] || {};\n}\n`;
  await fs.writeFile(target, content, 'utf8');
}

async function main() {
  await loadEnvFile(); // Load environment variables first
  const titles = await findRuleBookTitles();
  const menus = await fetchMenus(titles);
  await writeStaticMenusFile(menus);
  // eslint-disable-next-line no-console
  console.log(`Wrote ${Object.keys(menus).length} menus to lib/static-menus.js`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});


