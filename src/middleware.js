import { NextResponse } from 'next/server';

export async function middleware(request) {
  let destinationURL = '/';
  const splitPath = request.nextUrl.pathname.split('/');

  const getURL = async () => {
    const nodeData = await fetch(
      `https://fatesrd.amazingrando.dev/jsonapi/node/article?filter%5Bdrupal_internal__nid%5D=${splitPath[2]}`,
      {
        method: 'GET',
      }
    );
    const data = await nodeData.json();
    return data;
  };

  if (splitPath[1] === 'node') {
    const temp = await getURL();
    destinationURL = temp.data[0].attributes.path.alias;
  }

  return NextResponse.redirect(new URL(destinationURL, request.url));
}

export const config = {
  matcher: '/node/:path*',
};
