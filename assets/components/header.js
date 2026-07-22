'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faComments,
  faHeadSideHeadphones,
  faSearch,
  faSparkles,
  faBars,
  faTimes,
  faPlus,
  faMinus,
  faShoppingCart,
} from '@fortawesome/pro-regular-svg-icons';
import {
  faFacebook,
  faDiscord,
  faReddit,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import logo from '../images/logo.svg';
import PatreonBar from './patreonBar';

const FLYOUTS = {
  rules: 'flyout-rules',
  extras: 'flyout-extras',
  actualPlay: 'flyout-actual-play',
  communities: 'flyout-communities',
};

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openFlyout, setOpenFlyout] = useState(null);

  const toggleMobileNav = () => {
    setMobileNavOpen((open) => {
      if (open) {
        setOpenFlyout(null);
      }
      return !open;
    });
  };

  const toggleFlyout = (id) => {
    setOpenFlyout((current) => (current === id ? null : id));
  };

  return (
    <header className="site-header">
      <div className="site-header__branding">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span className="site-header__official">The official</span>
          <Image src={logo} alt="Fate SRD Logo" className="site-header__logo" />
        </Link>
        <button
          type="button"
          className={`site-header__branding__menu-toggle${mobileNavOpen ? ' open' : ''}`}
          aria-expanded={mobileNavOpen}
          aria-controls="primary-navigation"
          aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMobileNav}
        >
          <FontAwesomeIcon icon={faBars} className="bars" />
        </button>
      </div>
      <div className="site-header__nav">
        <nav
          id="primary-navigation"
          className={`nav-primary${mobileNavOpen ? ' nav-primary--open' : ''}`}
          aria-label="Primary"
        >
          <div className="site-header__branding site-header__branding--inside">
            <div>
              <span className="site-header__official">The official</span>
              <Image
                src={logo}
                alt="Fate SRD Logo"
                className="site-header__logo"
              />
            </div>
            <button
              type="button"
              className={`site-header__branding__menu-toggle${mobileNavOpen ? ' open' : ''}`}
              aria-expanded={mobileNavOpen}
              aria-controls="primary-navigation"
              aria-label="Close menu"
              onClick={toggleMobileNav}
            >
              <FontAwesomeIcon icon={faTimes} className="times" />
            </button>
          </div>
          <ul className="nav-primary__ul">
            <li
              className={`nav-primary__li has-nav-flyout nav-primary__sub${openFlyout === FLYOUTS.rules ? ' open' : ''}`}
              id={FLYOUTS.rules}
            >
              <button
                type="button"
                className="nav-primary__link nav-primary__toggle"
                aria-expanded={openFlyout === FLYOUTS.rules}
                onClick={() => toggleFlyout(FLYOUTS.rules)}
              >
                <FontAwesomeIcon
                  icon={faBook}
                  className="nav-primary__link-icon"
                />
                <span className="nav-primary__rules-wrapper">
                  Rules
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="nav-primary__sub__mobile-toggle plus"
                  />
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="nav-primary__sub__mobile-toggle minus"
                  />
                </span>
              </button>
              <div className="nav-flyout">
                <dl className="nav-flyout__region">
                  <dt>Core Rules</dt>
                  <dd>
                    <Link href="/fate-core">Fate Core</Link>
                  </dd>
                  <dd>
                    <Link href="/fate-accelerated">Fate Accelerated</Link>
                  </dd>
                  <dd>
                    <Link href="/fate-condensed">Fate Condensed</Link>
                  </dd>
                </dl>

                <dl className="nav-flyout__region">
                  <dt>Toolkits</dt>
                  <dd>
                    <Link href="/fate-system-toolkit">Fate System Toolkit</Link>
                  </dd>
                  <dd>
                    <Link
                      href="/fate-accessibility-toolkit"
                      style={{ whiteSpace: 'wrap' }}
                    >
                      Fate Accessibility Toolkit
                    </Link>
                  </dd>
                  <dd>
                    <Link href="/fate-adversary-toolkit">
                      Fate Adversary Toolkit
                    </Link>
                  </dd>
                  <dd>
                    <Link href="/fate-horror-toolkit">Fate Horror Toolkit</Link>
                  </dd>
                  <dd>
                    <Link href="/fate-space-toolkit">Fate Space Toolkit</Link>
                  </dd>
                </dl>

                <dl className="nav-flyout__region">
                  <dt>Fate World Books</dt>
                  <dd>
                    <Link href="/atomic-robo">Atomic Robo</Link>
                  </dd>
                  <dd>
                    <Link href="/venture-city">Venture City</Link>
                  </dd>
                  <dd>
                    <Link href="/war-of-ashes">War of Ashes</Link>
                  </dd>
                  <dd>
                    <Link href="/ihunt">#iHunt</Link>
                  </dd>
                </dl>

                <dl className="nav-flyout__region">
                  <dt>Worlds of Adventure</dt>
                  <dd>
                    <Link href="/frontier-spirit">Frontier Spirit</Link>
                  </dd>
                  <dd>
                    <Link href="/gods-and-monsters">Gods and Monsters</Link>
                  </dd>
                  <dd>
                    <Link href="/sails-full-of-stars">Sails Full of Stars</Link>
                  </dd>
                  <dd>
                    <Link href="/three-rocketeers">Three Rocketeers</Link>
                  </dd>
                </dl>

                <dl className="nav-flyout__region">
                  <dt>Fate Codex</dt>
                  <dd>
                    <Link href="/fate-codex/fate-codex-volume-1">Volume 1</Link>
                  </dd>
                  <dd>
                    <Link href="/fate-codex/fate-codex-volume-2">Volume 2</Link>
                  </dd>
                  <dd>
                    <Link href="/fate-codex/fate-codex-volume-3">Volume 3</Link>
                  </dd>
                </dl>

                <dl className="nav-flyout__region">
                  <dt>Odds &amp; Ends</dt>
                  <dd>
                    <a
                      href="https://bookofhanz.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      The Book of Hanz
                    </a>
                  </dd>
                  <dd>
                    <Link href="/odds-and-ends">Odds &amp; Ends</Link>
                  </dd>
                </dl>

                <dl className="nav-flyout__region">
                  <dt>Previous versions of Fate</dt>
                  <dd>
                    <Link href="/fate-3-era">
                      Fate 3.0 Era <small>(SOTC, DFRPG)</small>
                    </Link>
                  </dd>
                  <dd>
                    <Link href="/fate-2-era">Fate 2.0 Era</Link>
                  </dd>
                  <dd>
                    <Link href="/fate-1-era">Fate 1.0 Era</Link>
                  </dd>
                </dl>
              </div>
            </li>
            <li
              className={`nav-primary__li has-nav-flyout nav-primary__sub${openFlyout === FLYOUTS.extras ? ' open' : ''}`}
              id={FLYOUTS.extras}
            >
              <button
                type="button"
                className="nav-primary__link nav-primary__toggle"
                aria-expanded={openFlyout === FLYOUTS.extras}
                onClick={() => toggleFlyout(FLYOUTS.extras)}
              >
                <FontAwesomeIcon
                  icon={faSparkles}
                  className="nav-primary__link-icon"
                />
                <span className="nav-primary__rules-wrapper">
                  Extras
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="nav-primary__sub__mobile-toggle plus"
                  />
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="nav-primary__sub__mobile-toggle minus"
                  />
                </span>
              </button>
              <div className="nav-flyout nav-flyout--simple">
                <dl className="nav-flyout__region nav-flyout__region--simple">
                  <dt>More Fate Stuff for You</dt>
                  <dd>
                    <Link href="/products">Games &amp; Products</Link>
                  </dd>
                  <dd>
                    <Link href="/downloads">Downloads</Link>
                  </dd>
                </dl>
              </div>
            </li>

            <li
              className={`nav-primary__li has-nav-flyout nav-primary__sub${openFlyout === FLYOUTS.actualPlay ? ' open' : ''}`}
              id={FLYOUTS.actualPlay}
            >
              <button
                type="button"
                className="nav-primary__link nav-primary__toggle"
                aria-expanded={openFlyout === FLYOUTS.actualPlay}
                onClick={() => toggleFlyout(FLYOUTS.actualPlay)}
              >
                <FontAwesomeIcon
                  icon={faHeadSideHeadphones}
                  className="nav-primary__link-icon"
                />
                <span className="nav-primary__rules-wrapper">
                  Actual Play
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="nav-primary__sub__mobile-toggle plus"
                  />
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="nav-primary__sub__mobile-toggle minus"
                  />
                </span>
              </button>
              <div className="nav-flyout nav-flyout--simple">
                <dl className="nav-flyout__region nav-flyout__region--simple">
                  <dt>Watch, Listen, and Enjoy!</dt>
                  <dd>
                    <Link href="/learn-to-play">Learn to Play Fate Series</Link>
                  </dd>
                  <dd>
                    <Link href="/actual-play">Actual Play List</Link>
                  </dd>
                </dl>
              </div>
            </li>

            <li
              className={`nav-primary__li has-nav-flyout nav-primary__sub${openFlyout === FLYOUTS.communities ? ' open' : ''}`}
              id={FLYOUTS.communities}
            >
              <button
                type="button"
                className="nav-primary__link nav-primary__toggle"
                aria-expanded={openFlyout === FLYOUTS.communities}
                onClick={() => toggleFlyout(FLYOUTS.communities)}
              >
                <FontAwesomeIcon
                  icon={faComments}
                  className="nav-primary__link-icon"
                />
                <span className="nav-primary__rules-wrapper">
                  Communities
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="nav-primary__sub__mobile-toggle plus"
                  />
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="nav-primary__sub__mobile-toggle minus"
                  />
                </span>
              </button>
              <div className="nav-flyout nav-flyout--simple">
                <dl className="nav-flyout__region nav-flyout__region--simple">
                  <dt>Discuss Fate Around the Web</dt>
                  <dd>
                    <a href="https://discord.com/invite/CeXKx8NGYU">
                      <FontAwesomeIcon icon={faDiscord} /> Fate Tabletop RPGs
                    </a>
                  </dd>
                  <dd>
                    <a href="https://www.reddit.com/r/FATErpg/">
                      <FontAwesomeIcon icon={faReddit} /> FATErpg Reddit
                    </a>
                  </dd>
                  <dd>
                    <a href="https://www.facebook.com/groups/faterpg/">
                      <FontAwesomeIcon icon={faFacebook} /> Fate Core /
                      Accelerated RPG
                    </a>
                  </dd>
                  <dd>
                    <a href="https://www.facebook.com/groups/FateCom/">
                      <FontAwesomeIcon icon={faFacebook} /> Fate Community
                    </a>
                  </dd>
                </dl>
              </div>
            </li>

            <li className="nav-primary__li">
              <Link href="/store" className="nav-primary__link">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="nav-primary__link-icon"
                />
                Store
              </Link>
            </li>

            <li className="nav-primary__li nav-primary__li--search">
              <Link
                className="nav-primary__link"
                href="/search"
                aria-label="Search"
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="nav-primary__link-icon"
                />
                Search
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <PatreonBar />
    </header>
  );
}

export default Header;
