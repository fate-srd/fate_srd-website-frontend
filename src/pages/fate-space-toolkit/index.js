import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--fate-accelerated.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'Fate Space Toolkit';
  const description =
    '<p>Take your game into the great unknown! When you’re heading into the depths of outer space inside a tin can with a rocket strapped to one end, it’s critical to have the right instruction manual at your side. The Fate Space Toolkit is that manual, with advice and toolsets for Fate Core that run the gamut from hard science fiction to space opera and beyond.</p>';

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
