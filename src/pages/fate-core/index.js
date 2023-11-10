import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--fate-core.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'Fate Core';
  const description =
    '<p>Grab your plasma rifles, spell components, and jetpacks! Name your game; Fate Core is the foundation that can make it happen. Fate Core is a flexible system that can support whatever worlds you dream up. Have you always wanted to play a post-apocalyptic spaghetti western with tentacle monsters? Swords and sorcery in space? Wish there was a game based on your favorite series of books, film, or television, but it never happened? Fate Core is your answer.</p><p>Fate Core is a tabletop roleplaying game about proactive, capable people who lead dramatic lives. The type of drama they experience is up to you. But wherever they go, you can expect a fun storytelling experience full of twists…of fate.</p>';

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
