import Head from 'next/head';
import Papa from 'papaparse';
import fs from 'fs';
import path from 'path';
import { Layout } from '../../../assets/components/layout';

const Products = ({ products }) => (
  <Layout>
    <Head>
      <title>Fate Games &amp; Products</title>
    </Head>
    <main className="main-content-wrapper">
      <h1 className="page-title">Games &amp; Products</h1>
      <p className="large" style={{ marginBottom: '2rem' }}>
        Discover Fate books, adventures, and more on this list{' '}
        <a href="https://github.com/fate-srd/fate-product-list?tab=readme-ov-file">
          managed by the community
        </a>
        .
      </p>
      <p style={{ marginBottom: '4rem' }}>
        <a
          className="btn"
          href="https://docs.google.com/forms/d/e/1FAIpQLScS3fgz0UWqSSlx7f0hkrtb_-y-HFOsD8bDx576aUkrdiZq5w/viewform"
        >
          Add a game or product
        </a>
      </p>

      {products &&
        Object.entries(products).map(([key, values]) => (
          <div key={key}>
            {key !== 'Publisher Name' && (
              <>
                <h3>{key}</h3>
                <ul>
                  {values.map((value, index) =>
                    value.title ? (
                      <li key={index}>
                        <a href={value.link}>{value.title}</a>
                      </li>
                    ) : null,
                  )}
                </ul>
              </>
            )}
          </div>
        ))}
    </main>
  </Layout>
);

export async function getStaticProps() {
  try {
    // More robust path resolution
    const csvPath = path.join(
      process.cwd(),
      'node_modules',
      'fate-product-list',
      'fate-product-list.csv',
    );
    const csv = fs.readFileSync(csvPath, 'utf8');
    const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });

    const productList = {};
    parsed.data
      .filter(
        (row) =>
          row &&
          row['Publisher Name'] &&
          row['Product title'] &&
          row['Link to the product'],
      )
      .forEach((row) => {
        const publisher = String(row['Publisher Name']).trim();
        const title = String(row['Product title']).trim();
        const link = String(row['Link to the product']).trim();
        const productInfo = { title, link };

        if (!productList[publisher]) {
          productList[publisher] = [productInfo];
        } else {
          productList[publisher].push(productInfo);
        }
      });

    const products = Object.keys(productList)
      .sort()
      .reduce((acc, key) => {
        acc[key] = productList[key].sort((a, b) =>
          a.title.localeCompare(b.title),
        );
        return acc;
      }, {});

    return { props: { products } };
  } catch (error) {
    console.error('Error loading product list:', error);
    return { props: { products: {} } };
  }
}

export default Products;
