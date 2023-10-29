import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/pro-regular-svg-icons';
// import Menu from './menu';
import Image from 'next/image';
import WhereToBuy from './aside/whereToBuy';
import AuthorList from './aside/authorList';

const Aside = ({ ruleBook, publicationTagID }) => (
  <nav className="nav-in-page">
    <h1 className="nav-in-page__title nav-in-page__mobile-toggle">
      <span>
        <FontAwesomeIcon icon={faBars} className="bars" />
        <FontAwesomeIcon icon={faTimes} className="times" />
      </span>
      {ruleBook}
    </h1>
    <div className="nav-in-page__content">
      {/* <Menu
          menuName={`menu-${menu}`}
          classBase="nav-in-page"
          label={ruleBook}
        /> */}
      <div className="nav-in-page__about">
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

        <WhereToBuy value={ruleBook} />
        {/* 
          TKTK TOdo: Add author list to aside.
          <AuthorList publicationTagID={publicationTagID} /> 
        */}
      </div>
    </div>
  </nav>
);

export default Aside;
