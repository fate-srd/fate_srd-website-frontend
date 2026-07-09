import Head from 'next/head';
import { absoluteSiteUrl } from '../../lib/utils';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fate-srd.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/sharing.png`;

export function PageMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
}) {
  const canonical = absoluteSiteUrl(path);
  const metaDescription = description
    ? description.slice(0, 300)
    : 'The official Fate SRD — free Fate Core, Accelerated, Condensed, and toolkit rules.';

  return (
    <Head>
      {title ? <title>{title}</title> : null}
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      {title ? <meta property="og:title" content={title} key="title" /> : null}
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      {title ? <meta name="twitter:title" content={title} /> : null}
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
