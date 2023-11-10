import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--gods-and-monsters.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'Gods and Monsters';
  const description =
    '<p>The world is young and majestic, and humans eke out a living and dream of civilization. But you are not like them: you are a god. A primal creature, your soul a blazing font of power, your body an expression of your nature. The more extreme your behavior the greater the power you can wield—but it is easy to become lost in a single facet of your existence and cross the line from god to monster. </p>';

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
