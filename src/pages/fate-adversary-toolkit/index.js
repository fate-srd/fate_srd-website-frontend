import PublicationLanding from '../../../assets/components/publicationLanding';
import { getPublication } from '../../../assets/data/publications';

const publication = getPublication('fate-adversary-toolkit');

const Page = () => (
  <PublicationLanding
    title={publication.title}
    description={publication.description}
    ruleBook={publication.ruleBook}
    imageSrc={publication.imageSrc}
    path="/fate-adversary-toolkit"
  />
);

export default Page;
