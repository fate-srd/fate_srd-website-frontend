import Head from 'next/head';

import Link from 'next/link';
import { drupal } from '../../../lib/drupal';
import { Layout } from '../../../assets/components/layout';
import { NodeArticleTeaser } from '../../../assets/components/node--article--teaser';

export default function IndexPage({ nodes }) {
  return (
    <Layout>
      <Head>
        <title>Home • Fate SRD</title>
      </Head>
      <main className="main-content-wrapper" role="main">
        <h1 className="mb-10 text-6xl font-black">Latest Articles.</h1>
        <Link href="/node/3052">Node/3052</Link>
        {nodes?.length ? (
          nodes.map((node) => (
            <div key={node.id}>
              <NodeArticleTeaser node={node} />
              <hr className="my-20" />
            </div>
          ))
        ) : (
          <p className="py-4">No nodes found</p>
        )}
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const nodes = await drupal.getResourceCollectionFromContext(
    'node--article',
    context,
    {
      params: {
        'filter[status]': 1,
        'fields[node--article]':
          'title,path,field_image,uid,created,drupal_internal__nid',
      },
    }
  );

  return {
    props: {
      nodes,
    },
  };
}
