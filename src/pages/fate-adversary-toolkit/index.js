import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--fate-adversary-toolkit.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'Fate Adversary Toolkit';
  const description =
    '<p>Antagonists. Obstacles. Villains. Impediments. Call them what you will, but a great campaign needs opposition to create stirring conflict. The Fate Adversary Toolkit offers a variety of ideas, mechanics, and hacks to help you make the most out of every obstacle in your game. Explore what an adversary is in Fate terms, and always remember that everything is a character. Inhabit hostile worlds and situations that work against the players. Face down mooks and big bads built to provide high stakes drama and engage everyone at the table. Learn how to use high quality adversaries to drive your stories to completion.</p>';

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
