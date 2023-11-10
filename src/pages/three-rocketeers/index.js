import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--three-rocketeers.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'Three Rocketeers';
  const description =
    '<p>A deadly cabal of nobles and clergy threaten to usurp Her Majesty Queen Marie-Hélène’s throne and hand Gallia over to Pope Regulus IV, and the Rocketeers now work from the shadows to protect the queen from threats both foreign and domestic. Foreign spies and papal agents lurk in every shadow as the trap draws ever closer. A laser-sharp blade and even sharper wits will serve you well as interstellar powers play the game of puppets and shadows. The fate of the crown is in your hands.</p>';

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
