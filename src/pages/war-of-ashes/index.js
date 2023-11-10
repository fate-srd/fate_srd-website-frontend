import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--war-of-ashes.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'War of Ashes';
  const description =
    '<p>Welcome to the War of Ashes RPG: Fate of Agaptus! This “grimsical” minis-friendly tabletop RPG is based on the popular miniature game. Head off to adventure in a world where the inhabitants might look cute and cuddly but often carry pointy objects with which they might just decide to stab you. Play as a determined Elvorix, a vengeful Vidaar, a militaristic Jaarl, or a ravenous Kuld. Stage Romanic-style battles and then celebrate your victory with a pint of kogg.</p>';

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
