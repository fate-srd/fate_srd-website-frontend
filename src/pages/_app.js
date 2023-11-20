import '../../assets/components/style.scss';
import ErrorBoundary from '../../lib/errorBoundary';

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />;
    </ErrorBoundary>
  );
}
