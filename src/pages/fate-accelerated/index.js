import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--fate-accelerated.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'Fate Accelerated';
  const description =
    '<p> Fate Accelerated, or FAE, is a condensed version of Fate Core that brings all the flexibility and power of Fate in an easily digestible—and quickly read—package. With FAE, you and your friends can step into the world of your favorite books, movies, and TV or you can create a world of your own. And set up is simple—you can be playing in minutes. Whether you’re new to RPGs or an expert gamer, FAE brings something special to the table.</p><p>Fate Accelerated Edition. Your story—full speed ahead.</p>';

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
