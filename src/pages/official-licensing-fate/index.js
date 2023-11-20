import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';

const Page = () => (
  <Layout>
    <Head>
      <title>Official Licensing Questions</title>
    </Head>
    <main className="main-content-wrapper">
      <h1 className="page-title">Official Licensing Questions</h1>

      <p>
        If you are looking to license <em>Fate</em> for your own work, visit{' '}
        <a href="http://www.faterpg.com/licensing/?from=fate-srd">
          Evil Hat official Fate licensing page
        </a>
        .
      </p>

      <p>
        <strong>
          This site is not an official resource for creating your own derivative
          works.
        </strong>
      </p>
    </main>
  </Layout>
);

export default Page;
