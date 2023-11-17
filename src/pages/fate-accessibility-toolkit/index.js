import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--fate-accessibility-toolkit.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'Fate Accessibility Toolkit';
  const description =
    '<p>There’s room for everybody at the game table. The Fate Accessibility Toolkit offers a wealth of advice and guidance for Fate Core that brings disabled characters into your game and supports disabled players at your table. We’ve assembled a team from disabled communities to ensure that this book speaks to you from their real, lived experiences.</p>';

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
