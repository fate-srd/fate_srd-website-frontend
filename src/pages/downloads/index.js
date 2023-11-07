import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import downloadList from '../../../assets/data/downloads';

const Downloads = () => (
  <Layout>
    <Head>
      <title>Downloads</title>
    </Head>
    <main className="main-content-wrapper">
      <h1 className="page-title">Downloads</h1>
      {console.log(downloadList)}
      <p>
        Want to add your Download or Link to the page? Send us a message and we
        will add it.
      </p>
      {downloadList.map(({ url, label }) => (
        <p key={url}>
          <a href={url}>{label}</a>
        </p>
      ))}
    </main>
  </Layout>
);

export default Downloads;
