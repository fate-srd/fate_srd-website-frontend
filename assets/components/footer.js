import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faPatreon, faFacebook, faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/pro-regular-svg-icons';
import Image from 'next/image';
import logo from '../images/logo.svg';

// Data objects
const socialLinks = [
  { href: 'https://www.youtube.com/FateSRD', icon: faYoutube, text: 'YouTube' },
  { href: 'https://www.patreon.com/fate_srd', icon: faPatreon, text: 'Patreon' },
  { href: '/store', icon: faShoppingCart, text: 'Store', isInternal: true }
];

const siteLinks = [
  { href: '/about-site', text: 'About This Site' },
  { href: '/contact-us', text: 'Contact Us' },
  { href: '/official-licensing-fate', text: 'Official Licensing' },
  { href: '/privacy', text: 'Privacy Policy' }
];

const communityLinks = [
  { href: 'https://discord.com/invite/CeXKx8NGYU', icon: faDiscord, text: 'Fate Tabletop RPGs' },
  { href: 'https://www.reddit.com/r/FATErpg/', icon: faReddit, text: 'FATErpg Reddit' },
  { href: 'https://www.facebook.com/groups/faterpg/', icon: faFacebook, text: 'Fate Core / Accelerated RPG' },
  { href: 'https://www.facebook.com/groups/FateCom/', icon: faFacebook, text: 'Fate Community' }
];

// Components
const FooterLink = ({ href, icon, text, isInternal }) => {
  const LinkComponent = isInternal ? Link : 'a';
  const linkProps = isInternal 
    ? { href } 
    : { href, target: "_blank", rel: "noreferrer" };

  return (
    <LinkComponent className="" {...linkProps}>
      {icon && <FontAwesomeIcon icon={icon} />} {text}
    </LinkComponent>
  );
};

const FooterSection = ({ links }) => (
  <ul className="!pl-0">
    {links.map((link) => (
      <li className="" key={link.text}>
        <FooterLink {...link} />
      </li>
    ))}
  </ul>
);

const CommunitySection = () => (
  <ul className="">
    <li className="">
      Communities
      <dl className="">
        <dt>Discuss Fate Around the Web</dt>
        {communityLinks.map((link) => (
          <dd key={link.text}>
            <FooterLink {...link} />
          </dd>
        ))}
      </dl>
    </li>
  </ul>
);

const fateTranslations = {
  'Fate SRD in German': 'https://srd.faterpg.de/',
  'Fate SRD in Italian': 'https://www.fateitalia.it/',
  'Fate SRD in French': 'https://fate-srd.fr/',
  'Fate SRD in Brazilian Portuguese':
    'https://fatesrdbrasil.gitlab.io/fate-srd-brasil/',
  'Fate SRD in Korean 1': 'https://sites.google.com/site/fatecorekr/home',
  'Fate SRD in Korean 2':
    'https://ko.trpgkr.wikidok.net/wp-d/5d1db45ca4a7f1be66b95a44/View',
  'Fate SRD in Japanese': 'https://w.atwiki.jp/fatesrdj/',
  'Fate SRD in Chinese': 'https://www.sites.google.com/site/faterpg/fate',
  'Fate SRD in Czech (+Slovak)': 'https://fatesrd.d20.cz',
};

const Footer = () => (
  <footer className="bg-footer-bg relative text-white py-10 px-4">
    <div className="max-w-7xl mx-auto">
      <Link href="/" className="mb-10">
        <Image src={logo} alt="Fate SRD Logo" className="" />
      </Link>

      <nav role="navigation" aria-label="Footer Navigation" className="flex flex-row gap-16">
        <FooterSection links={socialLinks} />
        <FooterSection links={siteLinks} />
        <CommunitySection />
        <FooterSection links={Object.entries(fateTranslations).map(([key, value]) => ({
          href: value,
          text: key
        }))} />
      </nav>

      <div className="" aria-label="Legal Text">
        <div className="">
          <p className="">
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
