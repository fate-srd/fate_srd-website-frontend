import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--atomic-robo.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'Atomic Robo';
  const description =
    "<p>Are you ready for some two-fisted science adventure? Then it's time for the Atomic Robo RPG! Have you ever wanted to face down global conspiracy as an immortal atomic robot or Carl Sagan? The Atomic Robo RPG makes it possible. The Atomic Robo RPG brings you the most explosive Fate Core System experience yet. This is action science like you've never seen it before, coming straight at you from the pages of the popular Atomic Robo comics by Brian Clevinger and Scott Wegener. Play as an Action Scientist or immortal robot, super-spy or pulp adventurer—or something stranger still from the hidden corners of super-science!</p>";

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
