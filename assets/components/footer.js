import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faPatreon } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import logo from '../images/logo.svg';

const fateTranslations = {
  'Fate SRD in German': 'https://srd.faterpg.de/',
  'Fate SRD in Italian': 'https://www.fateitalia.it/',
  'Fate SRD in French': 'https://fate-srd.fr/',
  'Fate SRD in Brazilian Portuguese':
    'https://fatesrdbrasil.gitlab.io/fate-srd-brasil/',
  'Fate SRD in Korean':
    'https://ko.trpgkr.wikidok.net/wp-d/5d1db45ca4a7f1be66b95a44/View',
  'Fate SRD in Japanese': 'https://w.atwiki.jp/fatesrdj/',
  'Fate SRD in Chinese': 'https://www.sites.google.com/site/faterpg/fate',
  'Fate SRD in Czech (+Slovak)': 'https://fatesrd.d20.cz',
};

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__content">
      <div className="site-footer__logo-wrapper">
        <Link href="/" className="site-footer__link">
          <Image src={logo} alt="Fate SRD Logo" className="site-footer__logo" />
        </Link>
      </div>

      <nav
        className="site-footer__nav"
        role="navigation"
        aria-label="Footer Navigation"
      >
        <ul className="site-footer__ul">
          <li className="site-footer__li">
            <a
              className="site-footer__link"
              href="https://www.youtube.com/FateSRD"
            >
              <FontAwesomeIcon icon={faYoutube} /> YouTube
            </a>
          </li>
          <li className="site-footer__li" style={{ marginBottom: '2rem' }}>
            <a
              className="site-footer__link"
              href="https://www.patreon.com/fate_srd"
            >
              <FontAwesomeIcon icon={faPatreon} /> Patreon
            </a>
          </li>
          <li className="site-footer__li">
            <Link href="/about-site" className="site-footer__link">
              About This Site
            </Link>
          </li>
          <li className="site-footer__li">
            <Link className="site-footer__link" href="/contact-us">
              Contact Us
            </Link>
          </li>
          <li className="site-footer__li">
            <Link href="/official-licensing-fate" className="site-footer__link">
              Official Licensing
            </Link>
          </li>
          <li className="site-footer__li">
            <Link href="/privacy" className="site-footer__link">
              Privacy Policy
            </Link>
          </li>
        </ul>

        <ul className="site-footer__ul">
          {Object.entries(fateTranslations).map(([key, value]) => (
            <li className="site-footer__li" key={key}>
              <a
                href={value}
                className="site-footer__link"
                target="_blank"
                rel="noreferrer"
              >
                {key}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="site-footer__legal" aria-label="Legal Text">
        <div className="content">
          <p className="big">
            Evil Hat Productions, creators of the Fate role-playing game system,
            officially endorses the Fate SRD website as the definitive source
            for all Fate System Reference Documents. This endorsement affirms
            the site&rsquo;s commitment to providing comprehensive and accurate
            resources for the Fate gaming community.
          </p>
          <p>
            This site is copyright 2013–{new Date().getFullYear()}&nbsp;
            <a href="https://amazingrando.com">Amazing Rando Design</a>, except
            where otherwise noted. It is only possible because of the generous
            nature of Evil Hat Productions, LLC, who, in their wisdom, opened up
            the system to improve the Fate RPG ecosystem. Give them monies.
          </p>
          <p>
            This work is based on Fate Core System and Fate Accelerated Edition,
            products of Evil Hat Productions, LLC, developed, authored, and
            edited by Leonard Balsera, Brian Engard, Jeremy Keller, Ryan
            Macklin, Mike Olson, Clark Valentine, Amanda Valentine, Fred Hicks,
            and Rob Donoghue, and licensed for our use under the{' '}
            <a href="https://creativecommons.org/licenses/by/3.0/">
              Creative Commons Attribution 3.0 Unported license
            </a>
            .
          </p>
          <p>
            Fate™ is a trademark of Evil Hat Productions, LLC. The Powered by
            Fate logo is © Evil Hat Productions, LLC and is used with
            permission.
          </p>
          <p>
            The Fate Core font is © Evil Hat Productions, LLC and is used with
            permission. The Four Actions icons were designed by Jeremy Keller.
          </p>
          <p>
            This work is based on Fate Condensed (found at{' '}
            <a href="https://www.faterpg.com/">https://www.faterpg.com/</a>), a
            product of Evil Hat Productions, LLC, developed, authored, and
            edited by PK Sullivan, Lara Turner, Fred Hicks, Richard Bellingham,
            Robert Hanz, and Sophie Lagacé, and licensed for our use under the{' '}
            <a href="https://creativecommons.org/licenses/by/3.0/">
              Creative Commons Attribution 3.0 Unported license.
            </a>
            .
          </p>
          <p>
            Content from <a href="https://ihunt.fun">#iHunt</a> is licensed
            under a{' '}
            <a
              rel="license"
              href="https://creativecommons.org/licenses/by-sa/3.0/us/"
            >
              Creative Commons Attribution-ShareAlike 3.0 United States License
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
