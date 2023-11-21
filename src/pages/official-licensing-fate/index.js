import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '../../../assets/components/layout';
import poweredByFateLight from '../../../assets/images/Powered-by-Fate-Final-Light-BG.svg';
import poweredByFateDark from '../../../assets/images/Powered-by-Fate-Final-Dark-BG.svg';

const Page = () => (
  <Layout>
    <Head>
      <title>Official Licensing</title>
    </Head>
    <main className="main-content-wrapper">
      <h1 className="page-title">Official Licensing</h1>

      <p>
        If you are looking to license <em>Fate</em> for your own work, choose
        one of the options below. If you are uncertain which license to choose,
        we recommend using the Creative Commons license.
      </p>
      <h2>Licensing options for making your own game based on Fate</h2>
      <ul>
        <li>
          <Link href="/official-licensing-fate/cc">
            How to Make a Fate Game with Creative Commons (CC-BY)
          </Link>
        </li>
        <li>
          <Link href="/official-licensing-fate/ogl">
            How to Make a Fate Game Using the OGL
          </Link>
        </li>
      </ul>
      <h3>Download the official SRDs</h3>
      <p>
        These are the files to work from. Do not use the text on this site, as
        we have made changes to present the system better as a website.
      </p>
      <ul>
        <li>
          <a href="/downloads/CC-BY-SRDs.zip">
            Download official CC-BY SRDs (ZIP)
          </a>
        </li>
        <li>
          <a href="/downloads/OGL-SRD-Sources.zip">
            Download official OGL SRDs (ZIP)
          </a>
        </li>
      </ul>
      <h2>The Powered by Fate logo</h2>
      <Image src={poweredByFateLight} alt="Powered by Fate logo" />
      <Image src={poweredByFateDark} alt="Powered by Fate logo" />
      <p>
        <a href="/downloads/Powered-by-Fate-Logos.zip">
          Download the Powered By Fate logos (ZIP)
        </a>
      </p>
      <p>
        We’re offering two versions of the Powered By Fate logo. Choose the one
        that best suits the background you’re putting it on. To make legal use
        of either logo, you must include the following text:
      </p>
      <blockquote className="formal">
        Fate™ is a trademark of Evil Hat Productions, LLC. The Powered by Fate
        logo is &copy; Evil Hat Productions, LLC and is used with permission.
      </blockquote>
      <p>That’s it!</p>
      <p>
        If you need to make color alterations to one of these logo options to
        better suit your product, please email Evil Hat at{' '}
        <a href="mailto:feedback@evilhat.com">feedback@evilhat.com</a> for
        permission (which is usually granted). You may not otherwise alter the
        logo (change its shape, use only part of it, etc).
      </p>

      <h2>The Fate Core Font</h2>
      <p>
        <a href="/downloads/Fate-Core-Font-(TTF).zip">
          Download the Fate font (ZIP)
        </a>
      </p>
      <p>To make use of it, just give us credit as follows:</p>
      <blockquote className="formal">
        The Fate Core font is © Evil Hat Productions, LLC and is used with
        permission. The Four Actions icons were designed by Jeremy Keller.
      </blockquote>
      <p>
        This font contains a small number of glyphs, supporting Fudge Dice faces
        (0, +, -), the Four Actions (A, D, C, O), and some stress track boxes
        (using the number keys). Enjoy!
      </p>

      <h2>Questions about anything?</h2>
      <p>
        Reach out using <Link href="/contact-us">the contact form.</Link>
      </p>
    </main>
  </Layout>
);

export default Page;
