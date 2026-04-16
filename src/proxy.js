import { NextResponse } from 'next/server';

const DEFAULT_REDIRECT_PATH = '/';
const REDIRECT_FETCH_TIMEOUT_MS = 3500;
const NODE_API_URL =
  'https://fatesrd.amazingrando.dev/jsonapi/node/article?filter%5Bdrupal_internal__nid%5D=';

function createAbortSignal(timeoutMs) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  return { signal: controller.signal, timeoutId };
}

export async function resolveNodeAlias(nodeId) {
  const { signal, timeoutId } = createAbortSignal(REDIRECT_FETCH_TIMEOUT_MS);

  try {
    const nodeData = await fetch(`${NODE_API_URL}${nodeId}`, {
      method: 'GET',
      signal,
    });
    const data = await nodeData.json();
    return data?.data?.[0]?.attributes?.path?.alias ?? DEFAULT_REDIRECT_PATH;
  } catch (error) {
    console.error('Proxy redirect fallback triggered:', error);
    return DEFAULT_REDIRECT_PATH;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function proxy(request) {
  let destinationURL = DEFAULT_REDIRECT_PATH;
  const splitPath = request.nextUrl.pathname.split('/');

  if (splitPath[1] === 'node') {
    destinationURL = await resolveNodeAlias(splitPath[2]);
  }

  return NextResponse.redirect(new URL(destinationURL, request.url));
}

export const config = {
  matcher: '/node/:path*',
};
