import { Layout } from './layout';
import PublicationPage from './publicationPage';
import { PageMeta } from './pageMeta';
import { stripHtml } from '../../lib/utils';

const PublicationLanding = ({
  title,
  description,
  ruleBook,
  imageSrc,
  path,
}) => (
  <Layout aside>
    <PageMeta title={title} description={stripHtml(description)} path={path} />
    <PublicationPage
      title={title}
      description={description}
      ruleBook={ruleBook}
      imageSrc={imageSrc}
    />
  </Layout>
);

export default PublicationLanding;
