import PublicationLanding from '../../../assets/components/publicationLanding';
import { getPublication } from '../../../assets/data/publications';

const publication = getPublication('fate-horror-toolkit');

const Page = () => (
  <PublicationLanding
    title={publication.title}
    description={publication.description}
    ruleBook={publication.ruleBook}
    imageSrc={publication.imageSrc}
    path="/fate-horror-toolkit"
  />
);

export default Page;
