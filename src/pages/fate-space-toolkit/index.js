import PublicationLanding from '../../../assets/components/publicationLanding';
import { getPublication } from '../../../assets/data/publications';

const publication = getPublication('fate-space-toolkit');

const Page = () => (
  <PublicationLanding
    title={publication.title}
    description={publication.description}
    ruleBook={publication.ruleBook}
    imageSrc={publication.imageSrc}
    path="/fate-space-toolkit"
  />
);

export default Page;
