import '../../assets/components/style.scss';
import PlausibleProvider from 'next-plausible';

const plausibleSrc = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC;

export default function App({ Component, pageProps }) {
  const page = <Component {...pageProps} />;

  if (!plausibleSrc) {
    return page;
  }

  return (
    <PlausibleProvider
      src={plausibleSrc}
      enabled
      scriptProps={{ fetchPriority: 'low' }}
    >
      {page}
    </PlausibleProvider>
  );
}
