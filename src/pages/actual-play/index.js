import Link from 'next/link';
import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import { drupal } from '../../../lib/drupal';

const ActualPlay = ({ actualPlayData }) => (
  <Layout>
    <Head>
      <title>Actual Play</title>
    </Head>
    <main className="main-content-wrapper">
      <h1 className="page-title">Actual Play</h1>
      <p>
        An <strong>actual play</strong> is the play of a role-playing game that
        is performed as entertainment for an audience wider than the group of
        people who are playing it, generally recorded and broadcast over the
        internet. Actual plays may be performed live like a theatre show, by
        video recording, or as a sound recording (i.e. podcast). Some actual
        plays may be provided in several or all of these formats.
      </p>
      <p style={{ marginBottom: '3rem' }}>
        <Link href="/contact-us">Submit a show</Link>
      </p>

      <ul>
        {actualPlayData.map((item) => (
          <li key={item.title}>
            <a href={item.field_link.uri}>{item.title}</a> by{' '}
            <em>{item.field_authoring_entity}</em>.
          </li>
        ))}
      </ul>
    </main>
  </Layout>
);

export async function getStaticProps(context) {
  const actualPlayData = await drupal.getResourceCollectionFromContext(
    'node--media',
    context,
    {
      params: {
        'fields[node--media]':
          'path,name,field_link,field_publisher,id,title,field_authoring_entity',
        'page[limit]': 1000,
        'filter[status]': 1,
        sort: 'title',
      },
    },
  );

  return {
    props: {
      actualPlayData,
    },
  };
}

export default ActualPlay;
