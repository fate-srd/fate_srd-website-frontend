const requiredServerVars = ['NEXT_PUBLIC_DRUPAL_BASE_URL'];

function hasMissingEnv(vars) {
  return vars.filter((name) => !process.env[name]);
}

export function validateEnv({ throwOnMissing = false } = {}) {
  const missing = hasMissingEnv(requiredServerVars);

  if (missing.length > 0) {
    const message = `Missing required environment variables: ${missing.join(', ')}`;
    if (throwOnMissing) {
      throw new Error(message);
    }
    console.warn(message);
  }
}

export function getEnv(name, fallback = '') {
  return process.env[name] ?? fallback;
}
