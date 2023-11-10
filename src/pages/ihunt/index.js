import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--ihunt.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = '#iHunt';
  const description =
    "<p>#iHunt is a story telling game about killing monsters in the gig economy. In it, you play millennials scraping by paycheck to paycheck to make ends meet. A gig app called #iHunt offers them more money than they've ever made to hit the streets and kill vampires, werewolves, demons, and anything else that goes bump in the night. </p>";

  return (
    <Layout aside>
      <Head>
        <title>{title}</title>
      </Head>
      <PublicationPage
        title={title}
        description={description}
        ruleBook="iHunt"
        imageSrc={heroImage}
      />
    </Layout>
  );
};

export default Page;
