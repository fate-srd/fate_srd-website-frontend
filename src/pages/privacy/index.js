import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';

const Page = () => (
  <Layout>
    <Head>
      <title>Privacy Policy</title>
    </Head>
    <main className="main-content-wrapper">
      <h1 className="page-title">Privacy Policy</h1>

      <p>
        <a href="https://www.iubenda.com/privacy-policy/974370">
          Read our Privacy Policy
        </a>
      </p>
    </main>
  </Layout>
);

export default Page;
