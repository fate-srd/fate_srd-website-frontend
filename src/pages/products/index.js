import Head from 'next/head';
import Link from 'next/link';
import { drupal } from '../../../lib/drupal';
import { Layout } from '../../../assets/components/layout';

const Products = ({ bookData, publisherData }) => (
  <Layout>
    <Head>
      <title>Games &amp; Products</title>
    </Head>
    <main className="main-content-wrapper">
      <h1 className="page-title">Games &amp; Products</h1>
      <p>
        Discover Fate books, adventures, and more. If you&apos;d like to add
        something to the list, <Link href="/contact-us">let us know</Link>.
      </p>

      {Object.values(publisherData).map((publisher, index) => {
        const books = Object.values(bookData).filter(
          (value) => value?.field_publisher.id === publisher.id
        );

        return (
          <div key={index}>
            {books.length > 0 && (
              <>
                <h3>{publisher.name}</h3>
                <ul>
                  {books.sort().map((value) => (
                    <li key={value.id}>
                      <a href={value.field_link.uri}>{value.title}</a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        );
      })}
    </main>
  </Layout>
);

export async function getStaticProps(context) {
  const bookData = await drupal.getResourceCollectionFromContext(
    'node--fate_books',
    context,
    {
      params: {
        'fields[node--fate_books]':
          'path,name,field_link,field_publisher,id,title',
        'page[limit]': 1000,
        'filter[status]': 1,
        sort: 'title',
      },
    }
  );

  const publisherData = await drupal.getResourceCollectionFromContext(
    'taxonomy_term--publishers',
    context,
    {
      params: {
        'fields[taxonomy_term--publishers]': 'path,name',
        'page[limit]': 1000,
        sort: 'name',
      },
    }
  );

  return {
    props: {
      bookData,
      publisherData,
    },
  };
}

export default Products;
