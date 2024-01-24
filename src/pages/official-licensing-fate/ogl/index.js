import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../../../../assets/components/layout';
import LicensingNav from '../../../../assets/components/licensingNav';

const Page = () => (
  <Layout>
    <Head>
      <title>How to Make a Fate Game Using the OGL</title>
    </Head>
    <main className="main-content-wrapper">
      <h1 className="page-title">How to Make a Fate Game Using the OGL</h1>
      <LicensingNav />
      <p>
        The{' '}
        <Link href="/official-licensing-fate/ogl/full-ogl">
          Open Game License (OGL)
        </Link>{' '}
        is a popular choice that is well-known in gaming circles. This is a good
        choice if you’re already familiar with its use, or if you’re looking to
        intermix your content with other OGL licensed content. Prior to Fate
        Core, the OGL was the only license available for the Fate system, due to
        the earlier edition’s derivation from the Fudge RPG system. The OGL
        compels you to keep open what you’ve borrowed, and to make a clear
        product identity declaration about what you’re not making open by basing
        your game on OGL content.
      </p>
      <p>
        Our advice: This licensing option is here mainly for folks who are
        already familiar with the OGL, and/or are looking to integrate our
        content together with something also available under the OGL. It’s
        bulkier and more baroque to use, and for many it’s more difficult to
        understand.
      </p>
      <h2>HOW TO MAKE A FATE GAME USING THE OGL</h2>
      <p>
        We’re going to be borrowing FudgeRPG.com’s excellent boilerplate
        approach, here.
      </p>
      <p>What you need to do is:</p>
      <ul>
        <li>
          Grab a copy of the OGL and put it in your product (we tend to put it
          where you normally find the copyright page, while others might put it
          at the end of their work). (See &quot;Full OGL License Text&quot;
          file)
        </li>
        <li>
          Use the text found below as the start of your Section 15 of the OGL
        </li>
        <li>
          Replace all of the [square bracketed text] found there with the
          specifics of your own product.
        </li>
      </ul>
      <p>
        That’s it. You don’t have to ask our permission or anything like that,
        though we’d love it if you let us know your product’s out there and
        maybe slide us a few free copies (digital is fine). If you want to use
        the Powered By Fate logo on your product, you can find one on our main
        licensing page.
      </p>
      <h2>15 COPYRIGHT NOTICE</h2>
      <p>Open Game License v 1.0 Copyright 2000, Wizards of the Coast, Inc.</p>
      <p>
        Fate Core System and Fate Accelerated Edition © 2013 by Evil Hat
        Productions, LLC. Developed, authored, and edited by Leonard Balsera,
        Brian Engard, Jeremy Keller, Ryan Macklin, Mike Olson, Clark Valentine,
        Amanda Valentine, Fred Hicks, and Rob Donoghue
      </p>
      <p>
        Fate Condensed © 2020, a product of Evil Hat Productions, LLC,
        developed, authored, and edited by PK Sullivan, Lara Turner, Fred Hicks,
        Richard Bellingham, Robert Hanz, and Sophie Lagacé.
      </p>
      <p>
        [Include the appropriate Section 15 Copyright Notice information from
        any additional Fudge and/or Fate Open Game Content used in this
        document]
      </p>
      <p>
        [Name of this document or material] Copyright [Year], [Copyright
        Holder’s Name]; Author[s] [Insert the name or names of the author or
        authors of this document]
      </p>
      <p>
        In accordance with the Open Game License Section 8 “Identification” the
        following designate Open Game Content and Product Identity:
      </p>
      <p>OPEN GAME CONTENT</p>
      <p>
        [Insert a clear designation of what parts of this document you are
        releasing as Open Game Content, making it eligible for use by others
        under the Open Game License. Note that existing Open Game Content must
        remain OGC. Example: “The contents of this document are declared Open
        Game Content except for the portions specifically declared as Product
        Identity.”]
      </p>
      <p>PRODUCT IDENTITY</p>
      <p>
        [Insert a clear explanation of what parts of this document are
        designated as Product Identity and hence excluded from the designation
        of Open Game Content. Examples: “All content of this document is Open
        Game Content” or “All artwork, logos, symbols, designs, depictions,
        illustrations, maps and cartography, likenesses, and other graphics,
        unless specifically identified as Open Game Content” or “Any elements of
        the proprietary setting, including but not limited to capitalized names,
        organization names, characters, historic events, and organizations; any
        and all stories, storylines, plots, thematic elements, documents within
        the game worlds, quotes from characters or documents, and dialogue”]
      </p>
    </main>
  </Layout>
);

export default Page;
