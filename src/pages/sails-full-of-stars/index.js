import PublicationLanding from '../../../assets/components/publicationLanding';
import { getPublication } from '../../../assets/data/publications';

const publication = getPublication('sails-full-of-stars');

const Page = () => (
  <PublicationLanding
    title={publication.title}
    description={publication.description}
    ruleBook={publication.ruleBook}
    imageSrc={publication.imageSrc}
    path="/sails-full-of-stars"
  />
);

export default Page;
