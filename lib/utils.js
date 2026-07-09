export function formatDate(input) {
  const date = new Date(input);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function absoluteUrl(input) {
  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${input}`;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fate-srd.com';

export function stripHtml(html = '') {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function absoluteSiteUrl(path = '/') {
  if (!path || path === '/') {
    return SITE_URL;
  }
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
