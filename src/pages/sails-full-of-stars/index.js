import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import heroImage from '../../../assets/images/landing-page-heroes/hero--sails-full-of-stars.jpg';
import PublicationPage from '../../../assets/components/publicationPage';

const Page = () => {
  const title = 'Sails Full of Stars';
  const description =
    '<p>In the year 1850, three empires struggle for control of the solar system: the Ottomans, whose vast Earthly empire may soon become obsolete; the Chinese, who pioneered the construction of rheoships; and the French, the new masters of alchemy. Wherever patrols are weak, pirates menace the shipping lanes. Sailors whisper rumors of dragons swimming through the black void. Fools and madmen push the boundaries of alchemy, heedless of the consequences.</p>';

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
