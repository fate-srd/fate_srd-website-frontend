import Head from 'next/head';
import { Layout } from '../../../../assets/components/layout';
import LicensingNav from '../../../../assets/components/licensingNav';

const Page = () => (
  <Layout>
    <Head>
      <title>How to Make a Fate Game with Creative Commons (CC-BY)</title>
    </Head>
    <main className="main-content-wrapper">
      <h1 className="page-title">
        How to Make a Fate Game with Creative Commons (CC-BY)
      </h1>
      <LicensingNav />
      <p>
        For our primary open license option, we will be making use of the
        Creative Commons Attribution (CC-BY) license.{' '}
      </p>
      <p>
        <a href="https://creativecommons.org/licenses/by/3.0/">
          https://creativecommons.org/licenses/by/3.0/
        </a>
      </p>
      <p>
        Use of this license will simply require that you make a clear statement
        (we’ll give you the text) that your game is based on our material.
        Unlike some other Creative Commons options, this is not “viral”—you
        don’t have to make your derived content open at all. We think it’s
        awesome if you do, though, because a) we did, and b) it means you’re
        contributing something back to the community that made Fate possible in
        the first place.
      </p>
      <p>
        Our advice: This is the easiest option to implement and understand. For
        each SRD you use, you must include a small attribution bloc on your
        copyright page. The attribution bloc is given at the top of each SRD, so
        it’s an easy copy &amp; paste. It lays no claim to your work, and you’re
        not obligated to make your derived work open as well, it just requires
        you to give credit as specified.
      </p>
      <h2>A GUIDE TO USING THE FATE SRDS WITH CREATIVE COMMONS</h2>
      <p>
        This is aimed at designers, writers, and publishers who’d like to build
        on the Creative Commons release of the Fate Core System and Fate
        Accelerated Edition System Reference Documents. From here on in, we’ll
        just call them “the SRDs”.
      </p>
      <p>
        The most important thing to understand if you’re new to Creative Commons
        licenses is that we’ve chosen the most liberal one possible. In
        particular, the license we chose isn’t viral, which means you don’t have
        to license those works under a Creative Commons license if you don’t
        want to! We think this is important because there are good reasons not
        to use an open license; our experience working with the Dresden Files
        and other licensed properties tells us that.
      </p>
      <h2 id="copying">Copying</h2>
      <p>
        The first right you have under the Creative Commons Attribution license
        is a straight-up copy of the SRDs. If you do this, just remember to
        include the original copyright notice found in those documents, and
        don’t add any kind of copy protection.
      </p>
      <h2 id="translations-and-non-us-works">Translations and Non-US Works</h2>
      <p>
        A translation counts as a new work, so the next section will tell you
        everything you need to know about that. It might be useful for you to
        know that the Creative Commons Attribution Unported license was written
        using the terminology of the Berne Convention and various WIPO Copyright
        treaties, so you shouldn’t run into any problems if you’re publishing in
        a jurisdiction other than the United States.
      </p>
      <h2 id="creating-new-works">Creating New Works</h2>
      <p>
        You have the right to create new works of any kind derived from the
        SRDs.
      </p>
      <h2 id="what-license-should-i-use-">What License Should I Use?</h2>
      <p>
        We hope you use a Creative Commons license where it makes sense, because
        we think that will benefit the Fate community, but it’s completely up to
        you.
      </p>
      <p>
        If you do decide to use a Creative Commons license, you can use any of
        them. If you want to use a viral Creative Commons license, so that
        people who build on your work must also release their work under the
        same license, you can do that. (That’s not our preference nor our
        recommendation, as it can make things like licensed IP games
        contractually impossible, but it’s up to you.)
      </p>
      <p>
        On the other hand, if you’re working with someone else’s intellectual
        property and they’re not comfortable about releasing it under any sort
        of open license, that’s cool too.
      </p>
      <h2 id="requirements">Requirements</h2>
      <p>
        The biggest requirement for anything you do based on our work is
        attribution; you must give us credit for our work. The next section goes
        into detail on how you should do that.
      </p>
      <p>
        Second, you can’t imply or state that Evil Hat is endorsing or
        sponsoring you unless we’ve made a special arrangement with you. Don’t
        use our logo or the Fate logo without talking to us first. There is a
        Powered by Fate logo you can use very easily, though; look for that
        elsewhere on the site (Fate-SRD.com).
      </p>
      <p>
        Finally, you can’t use the SRDs to make something which would be
        prejudicial to Evil Hat’s honor or reputation. (That’s exactly how the
        legal license puts it!) We’re not sure how you’d do that, but don’t.
      </p>
      <p>
        That’s all the legal stuff. As always, if you’re unsure about exactly
        what to do or if you’re investing a lot of money in publishing something
        based on our work, think about talking to a lawyer.
      </p>
      <p>
        This isn’t a legal requirement, but we’d love it if you let us know what
        you were doing with Fate and maybe passed along a few copies — digital
        ones would be fine. Drop us an email at feedback@evilhat.com if you want
        to reach out.
      </p>
      <h2 id="attribution">Attribution</h2>
      <p>So, how do you give us credit for our work?</p>
      <p>
        This is really simple. Wherever you put your own copyright, add the
        following text:
      </p>
      <blockquote className="formal">
        This work is based on Fate Core System and Fate Accelerated Edition
        (found at{' '}
        <a href="https://www.faterpg.com/">https://www.faterpg.com/</a>
        ), products of Evil Hat Productions, LLC, developed, authored, and
        edited by Leonard Balsera, Brian Engard, Jeremy Keller, Ryan Macklin,
        Mike Olson, Clark Valentine, Amanda Valentine, Fred Hicks, and Rob
        Donoghue, and licensed for our use under the Creative Commons
        Attribution 3.0 Unported license (
        <a href="https://creativecommons.org/licenses/by/3.0/">
          https://creativecommons.org/licenses/by/3.0/
        </a>
        ).
      </blockquote>
      <blockquote className="formal">
        This work is based on Fate Condensed (found at{' '}
        <a href="https://www.faterpg.com/">https://www.faterpg.com/</a>), a
        product of Evil Hat Productions, LLC, developed, authored, and edited by
        PK Sullivan, Lara Turner, Fred Hicks, Richard Bellingham, Robert Hanz,
        and Sophie Lagacé, and licensed for our use under the{' '}
        <a href="https://creativecommons.org/licenses/by/3.0/">
          Creative Commons Attribution 3.0 Unported license.
        </a>
        .
      </blockquote>
      <p>
        All the text has to be the same size as the rest of your copyright
        section — that’s one of the license requirements. (This text is
        different if you’re also using the Fate System Toolkit material — you’ll
        find the text you need to include for that in its system reference
        document, above.)
      </p>
      <p>
        If you’re publishing electronically, you can make “Creative Commons
        Attribution 3.0 Unported license” a link to{' '}
        <a href="https://creativecommons.org/licenses/by/3.0/">
          https://creativecommons.org/licenses/by/3.0/
        </a>{' '}
        and “Fate Core System” a link to{' '}
        <a href="https://www.faterpg.com/">https://www.faterpg.com/</a>, instead
        of printing the URLs separately.
      </p>
      <h2 id="using-the-cc-licensed-fate-core-srd-with-the-ogl">
        Using the CC-Licensed Fate Core SRD with the OGL
      </h2>
      <p>
        The first thing to remember here is that you don’t need to do it. We
        released the Fate Core SRD under both licenses, so if you want to
        release your work under the OGL, you can derive it from the OGL version.
        The two versions are identical except for the license.
      </p>
      <p>
        But if you wanted to do it, you could. For the purposes of creating a
        work that is licensed under the Open Game License and which derives from
        the Creative Commons Fate SRD, we grant permission to attribute our work
        by adding the following paragraph to Section 15 of your work’s copy of
        the Open Game License:
      </p>
      <blockquote className="formal">
        Fate Core System and Fate Accelerated Edition © 2013 by Evil Hat
        Productions LLC. Developed, authored, and edited by Leonard Balsera,
        Brian Engard, Jeremy Keller, Ryan Macklin, Mike Olson, Clark Valentine,
        Amanda Valentine, Fred Hicks, and Rob Donoghue.
      </blockquote>
      <p>
        This works for us because we’re giving you explicit permission to handle
        attribution that way. Don’t assume that any other Creative Commons
        material can be used the same way.
      </p>
    </main>
  </Layout>
);

export default Page;
