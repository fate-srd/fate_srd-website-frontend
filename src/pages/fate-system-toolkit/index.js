import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--fate-system-toolkit.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'Fate System Toolkit';
  const description =
    '<p>Rules, glorious rules! The Fate Core system is flexible, hackable, and adaptable to any world you can dream up. This Fate System Toolkit is packed with system ideas to bring those dreams to life. </p> <p>Learn how to hack the skill system to better suit your terraforming campaign. Get ideas on how to create races and societies for your woodland elves, subterranean aliens, or afterlife police force. Customize our magic starters to create your own system, and use our gadget starters to bring your gear to life (only not literally). </p> <p>Whatever genre you’re gaming, you’ll find a wide array of customizable concepts and optional rules in the Fate System Toolkit to take your campaign to the next level. </p>';

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
