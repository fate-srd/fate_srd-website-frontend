export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const secret =
    req.query.secret || req.headers['x-revalidate-secret'] || req.body?.secret;

  if (!process.env.DRUPAL_REVALIDATE_SECRET) {
    return res.status(500).json({
      message: 'DRUPAL_REVALIDATE_SECRET is not configured',
    });
  }

  if (secret !== process.env.DRUPAL_REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const path =
    req.query.path ||
    req.body?.path ||
    req.body?.slug ||
    (Array.isArray(req.body?.paths) ? req.body.paths[0] : null);

  if (!path || typeof path !== 'string') {
    return res.status(400).json({
      message:
        'Missing path. Pass ?path=/your/alias or JSON { "path": "/your/alias" }',
    });
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  try {
    await res.revalidate(normalizedPath);
    return res.json({ revalidated: true, path: normalizedPath });
  } catch (error) {
    return res.status(500).json({
      message: 'Error revalidating',
      path: normalizedPath,
      error: error.message,
    });
  }
}
