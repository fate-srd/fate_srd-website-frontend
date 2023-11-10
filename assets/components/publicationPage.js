import Image from 'next/image';
import Aside from './aside';

const PublicationPage = ({ title, description, imageSrc, ruleBook }) => (
  <>
    <main className="main-content-wrapper main-content-wrapper--with-hero">
      <Image src={imageSrc} alt="" className="main-content__hero" />
      <div className="main-content--with-hero__content">
        <h1 className="page-title">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </main>
    <aside className="aside-wrapper">
      <Aside ruleBook={ruleBook} />
    </aside>
  </>
);

export default PublicationPage;
