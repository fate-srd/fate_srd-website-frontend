import { NextResponse } from 'next/server';

export async function middleware(request) {
  // console.log('request', typeof request, request);
  let newURL = '/';
  const splitPath = request.nextUrl.pathname.split('/');
  if (splitPath[1] === 'node') {
    fetch(
      `https://fatesrd.amazingrando.dev/jsonapi/node/article?filter%5Bdrupal_internal__nid%5D=${splitPath[2]}`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((json) => {
        newURL = request.nextUrl.origin + json.data[0].attributes.path.alias;
        return NextResponse.redirect(new URL(newURL));
      });
  }
}

export const config = {
  matcher: '/node/:path*',
};
