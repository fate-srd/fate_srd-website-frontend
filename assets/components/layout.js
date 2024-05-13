import Link from 'next/link';
import Header from './header';
import Footer from './footer';
import Head from 'next/head';

export function Layout({ children, aside }) {
  return (
    <div className="page-wrapper">
      <Head>
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        <meta property="og:image" content="https:/fate-srd.com/images/sharing.png" />
      </Head>
      <Header />
      <div className="site-main">
        <div
          className={
            aside
              ? 'site-main__content site-main__content--aside'
              : 'site-main__content'
          }
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
