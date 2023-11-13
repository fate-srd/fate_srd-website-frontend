import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/pro-regular-svg-icons';
import Image from 'next/image';
import { useState } from 'react';
import WhereToBuy from './aside/whereToBuy';
import Menu from './menu';

const Aside = ({ ruleBook }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <nav
      className={
        mobileNavOpen ? 'nav-in-page nav-in-page--open' : 'nav-in-page'
      }
    >
      <h1 className="nav-in-page__title nav-in-page__mobile-toggle">
        <button onClick={toggleMobileNav} type="button">
          <span>
            <FontAwesomeIcon icon={faBars} className="bars" />
            <FontAwesomeIcon icon={faTimes} className="times" />
          </span>
          {ruleBook}
        </button>
      </h1>
      <div className="nav-in-page__content">
        <Menu value={ruleBook} />
        <div className="nav-in-page__about">
          {ruleBook !== 'Odds and Ends' ||
            (ruleBook !== 'Fate Codex' && (
              <Image
                className="nav-in-page__about__image"
                src={`/../images/covers/menu-${ruleBook
                  .toLowerCase()
                  .split(' ')
                  .join('-')}.jpg`}
                alt={`${ruleBook} Cover`}
                width="200"
                height="400"
              />
            ))}

          <WhereToBuy value={ruleBook} />
          {/* 
          TKTK TOdo: Add author list to aside.
          <AuthorList publicationTagID={publicationTagID} /> 
        */}
        </div>
      </div>
    </nav>
  );
};

export default Aside;
