import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';

const Page = () => (
  <Layout>
    <Head>
      <title>Fate 1.0 Era</title>
    </Head>
    <main className="main-content-wrapper">
      <h1 className="page-title">Fate 1.0 Era</h1>

      <p>
        <a href="/downloads/fate-1/fate1e.pdf">Download Fate 1.0 PDF</a>
      </p>
    </main>
  </Layout>
);

export default Page;
