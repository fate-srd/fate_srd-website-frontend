import Image from 'next/image';
import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';
import ennies from '../../../assets/images/ennies-2014-silver.jpg';
import { Button } from "@/components/ui/button"

const Page = () => (
  <Layout>
    <Head>
      <title>About the Site</title>
    </Head>
    <main className="main-content-wrapper">
      <h1 className="page-title">About the Site</h1>
      <Button>Click me</Button>

      <p>
        The Fate Roleplaying Game System Reference Document (SRD) is intended to
        be a useful digital companion to your Fate game. Use the search to find
        content quickly, bookmark pages for reference, and enjoy having fewer
        books to carry at a convention.
      </p>

      <p>
        This site was built for speed and accessibility. I hope to continue to
        refine the experience of using this site as time goes on.
      </p>

      <h2>Supported by the Fans</h2>

      <p>
        The Fate SRD is directly supported by people like you for as little as
        $1/month.{' '}
        <a href="https://www.patreon.com/fate_srd">Visit our Patreon</a> to
        learn more.
      </p>

      <h2>ENnie Award Winner for Best Web Site</h2>

      <p>
        <Image alt="" className="pull-right" src={ennies} />
      </p>

      <p>
        This site brought home the Silver for Best Web Site at the 2014 ENnies.
      </p>

      <h2>About the Contributors</h2>

      <p>
        This site is built and maintained by Randy Oest, also known as Amazing
        Rando or Wizardoest, depending on where you live on the internet. You
        will find him on <a href="https://twitter.com/amazingrando">Twitter</a>.
        He hopes to one day have time to write his own Fate campaign book.
      </p>

      <p>
        This site is a labor of love, inspired by the great SRD sites that came
        before it, e.g.,{' '}
        <a href="https://www.d20srd.org/index.htm">Hypertext d20</a> and{' '}
        <a href="https://www.d20pfsrd.com/home">d20PFSRD.org</a>.
      </p>

      <p>
        A special thanks to&nbsp;Adam Dunigan for helping with data entry for
        the <em>Fate System Toolkit</em>, and to{' '}
        <a href="https://twitter.com/fredhicks">Fred Hicks</a> and{' '}
        <a href="https://twitter.com/DaveJoria">Dave Joria</a> for their work on
        the Stuntmaker (retired).
      </p>

      <h2>Technical Details</h2>

      <p>
        Curious about what is under the hood? Visit the{' '}
        <a href="https://github.com/fate-srd">Fate SRD organization</a> on
        Github to see all of the code.
      </p>

      <p>
        The short version is that Drupal holds the content and Gatsby renders
        the site.
      </p>
    </main>
  </Layout>
);

export default Page;
