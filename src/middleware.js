// import { NextResponse } from 'next/server';
import { MiddlewareRequest, MiddlewareResponse } from '@netlify/next';

export async function middleware(nextRequest) {
  const request = new MiddlewareRequest(nextRequest);
  // console.log('request', typeof request, request);
  console.log('START');
  const splitPath = request.nextUrl.pathname.split('/');

  const newURL = () => {
    console.log('fetching');
    fetch(
      `https://fatesrd.amazingrando.dev/jsonapi/node/article?filter%5Bdrupal_internal__nid%5D=${splitPath[2]}`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log('fetch worked');
        console.log('json', json.data.length);
        const destinationURL = json.data[0].attributes.path.alias
          ? request.nextUrl.origin + json.data[0].attributes.path.alias
          : '/';
        console.log('destinationURL', destinationURL);
        return MiddlewareResponse.redirect(
          new URL(destinationURL, request.url)
        );
      });
  };

  if (splitPath[1] === 'node') {
    newURL();
  }
}

export const config = {
  matcher: '/node/:path*',
};
