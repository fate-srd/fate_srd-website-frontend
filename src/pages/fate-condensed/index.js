import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--fate-condensed.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'Fate Condensed';
  const description =
    '<p>Fate Condensed is a compact, stand-alone version of the Fate Core System streamlined for clarity and ease of reference. Fate Condensed gives you easy-to- digest rules in as few pages as possible, letting you get to the table and roll the dice, fast. It includes a few simple refinements to the Fate Core engine honed over a decade of active play and development. And best of all, it’s 100% compatible with every one of our 90+ Fate products already published.</p>';

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
