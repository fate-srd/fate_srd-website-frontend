import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';

const Page = () => (
  <Layout>
    <Head>
      <title>Fate 2.0 Era</title>
    </Head>
    <main className="main-content-wrapper">
      <h1 className="page-title">Fate 2.0 Era</h1>

      <ul>
        <li>
          <a href="/downloads/fate-2/FATE2fe.pdf">Download Fate 2.0 PDF</a>
        </li>
        <li>
          <a href="/downloads/fate-2/Fate-SRD-2005-03-31.rtf">Fate 2.0 SRD</a>
        </li>
        <li>
          <a href="/downloads/fate-2/ontheflysrd.txt">On the fly SRD</a>
        </li>
        <li>
          <a href="/downloads/fate-2/pyramidreloaded.pdf">
            Pyramid reloaded PDF
          </a>
        </li>
        <li>
          <a href="/downloads/fate-2/twists.pdf">Twists PDF</a>
        </li>
      </ul>
    </main>
  </Layout>
);

export default Page;
