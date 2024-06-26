import Link from 'next/link';
import React from 'react';
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

class Header extends React.Component {
  componentDidMount() {
    const context = document;
    const mobileToggles = context.querySelectorAll(
      '.site-header__branding__menu-toggle'
    );
    const mainMenu = context.querySelector('.nav-primary');
    const rulesToggle = context.querySelectorAll('.nav-primary__toggle');

    const handleMainMenu = () => {
      mainMenu.classList.toggle('nav-primary--open');
      mobileToggles.forEach((toggle) => toggle.classList.toggle('open'));
    };

    function handleRulesToggle() {
      const { target } = this.dataset;
      const targetID = context.getElementById(target);
      targetID.classList.toggle('open');
    }

    mobileToggles.forEach((toggle) =>
      toggle.addEventListener('click', handleMainMenu)
    );
    rulesToggle.forEach((toggle) =>
      toggle.addEventListener('click', handleRulesToggle)
    );
  }

  render() {
    return (
      <header className="site-header">
        <div className="site-header__branding">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span className="site-header__official">The official</span>
            <Image
              src={logo}
              alt="Fate SRD Logo"
              className="site-header__logo"
            />
          </Link>
          <div className="site-header__branding__menu-toggle">
            <FontAwesomeIcon icon={faBars} className="bars" />
          </div>
        </div>
        <div className="site-header__nav">
          <nav
            className="nav-primary"
            role="navigation"
            aria-label="Primary Navigation"
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
              <div className="site-header__branding__menu-toggle">
                <FontAwesomeIcon icon={faTimes} className="times" />
              </div>
            </div>
            <ul className="nav-primary__ul">
              <li
                className="nav-primary__li has-nav-flyout nav-primary__sub"
                id="flyout-rules"
              >
                <button
                  type="button"
                  className="nav-primary__link nav-primary__toggle"
                  data-target="flyout-rules"
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
                      <Link href="/fate-system-toolkit">
                        Fate System Toolkit
                      </Link>
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
                      <Link href="/fate-horror-toolkit">
                        Fate Horror Toolkit
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/fate-space-toolkit">
                        Fate Space Toolkit
                      </Link>
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
                      <Link href="/sails-full-of-stars">
                        Sails Full of Stars
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/three-rocketeers">Three Rocketeers</Link>
                    </dd>
                  </dl>

                  <dl className="nav-flyout__region">
                    <dt>Fate Codex</dt>
                    <dd>
                      <Link href="/fate-codex/fate-codex-volume-1">
                        Volume 1
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/fate-codex/fate-codex-volume-2">
                        Volume 2
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/fate-codex/fate-codex-volume-3">
                        Volume 3
                      </Link>
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
                className="nav-primary__li has-nav-flyout nav-primary__sub"
                id="flyout-extras"
              >
                <button
                  type="button"
                  className="nav-primary__link nav-primary__toggle"
                  data-target="flyout-extras"
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
                className="nav-primary__li has-nav-flyout nav-primary__sub"
                id="flyout-actual-play"
              >
                <button
                  type="button"
                  className="nav-primary__link nav-primary__toggle"
                  data-target="flyout-actual-play"
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
                      <Link href="/learn-to-play">
                        Learn to Play Fate Series
                      </Link>
                    </dd>
                    <dd>
                      <Link href="/actual-play">Actual Play List</Link>
                    </dd>
                  </dl>
                </div>
              </li>

              <li
                className="nav-primary__li has-nav-flyout nav-primary__sub"
                id="flyout-communities"
              >
                <button
                  type="button"
                  className="nav-primary__link nav-primary__toggle"
                  data-target="flyout-communities"
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
                  role="search"
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
}

export default Header;
