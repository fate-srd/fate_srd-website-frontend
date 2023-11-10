import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--frontier-spirit.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'Frontier Spirit';
  const description =
    '<p>Despite its long history, the Commonwealth has only civilized a fraction of the galaxy. Life on an undeveloped colony world is hard. The problems are never-ending: pirate raids, corporate claim-jumpers, outlaw settlers, unpredictable weather...and an alien spirit world unused to coexisting with sentient creatures.</p>';

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
