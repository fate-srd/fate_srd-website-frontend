import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--fate-accelerated.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'Fate Horror Toolkit';
  const description =
    '<p>Something lurks in the shadows… Maybe it’s a masked killer, or a creature from the unknown depths, or a psychotic porcelain doll. Or maybe it’s just a cat, and the threat stands right behind you! The Fate Horror Toolkit offers a variety of tools, mechanics, and hacks to help you develop thematic horror in your game. Explore what horror is and how to employ it effectively at your table. Learn how to develop horrific elements in Fate—a game system designed around competent, proactive characters not usually seen in horror. Pick from a variety of mechanics to easily design your own game about the things that go bump in the night.</p>';

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
