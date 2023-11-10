import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--odds-ends.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'Odds and Ends';
  const description =
    '<p>A collection of small SRD content for use in your games.</p>';

  return (
    <Layout aside>
      <Head>
        <title>{title}</title>
      </Head>
      <PublicationPage
        title={title}
        description={description}
        ruleBook={title}
        imageSrc={heroImage}
      />
    </Layout>
  );
};

export default Page;
