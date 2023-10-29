import Head from 'next/head';

import { drupal } from '../../lib/drupal';
import { Layout } from '../../assets/components/layout';
import { NodeArticleTeaser } from '../../assets/components/node--article--teaser';

export default function IndexPage({ nodes }) {
  return (
    <Layout>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <div>
        <h1 className="mb-10 text-6xl font-black">Latest Articles.</h1>
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
      </div>
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
        'fields[node--article]': 'title,path,field_image,uid,created',
        include: 'field_image,uid',
        sort: '-created',
      },
    }
  );

  return {
    props: {
      nodes,
    },
  };
}
