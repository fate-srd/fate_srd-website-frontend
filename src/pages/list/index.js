import { drupal } from '../../../lib/drupal';
import { Layout } from '../../../assets/components/layout';
import { NodeArticleTeaser } from '../../../assets/components/node--article--teaser';
import { PageMeta } from '../../../assets/components/pageMeta';

export default function IndexPage({ nodes }) {
  return (
    <Layout>
      <PageMeta
        title="Latest Articles • Fate SRD"
        description="Browse the latest Fate SRD articles and rules content."
        path="/list"
      />
      <main id="main-content" className="main-content-wrapper" tabIndex={-1}>
        <h1 className="article-list__title">Latest Articles.</h1>
        {nodes?.length ? (
          nodes.map((node) => (
            <div key={node.id} className="article-list__item">
              <NodeArticleTeaser node={node} />
            </div>
          ))
        ) : (
          <p className="article-list__empty">No nodes found</p>
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
    },
  );

  return {
    props: {
      nodes,
    },
    revalidate: 3600,
  };
}
