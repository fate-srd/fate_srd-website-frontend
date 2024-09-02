import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--venture-city.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'Venture City';
  const description =
    '<p>Take a trip to Venture City, a world of superpowers, villainous corporations, and ruthless gangs, set in a near-future where powers are for sale. From the corporate sponsored heroes to the supervillains in the news, and all the way down to the little guys who try to hide their powers, there are superheroes everywhere you see. Bring them to your Fate Core table with this Venture City compilation, which includes both Venture City Stories and Venture City Powers, written by masterminds Brian Engard and Lara Turner.</p>';

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
