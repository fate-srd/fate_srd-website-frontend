import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/pro-solid-svg-icons';
import { useRouter } from 'next/router';
import { drupal } from '../../lib/drupal';

const classBase = 'nav-in-page';

const LinkWithChildren = ({
  children,
  hasChildren,
  item,
  currentPathname,
  inActivePath,
}) => {
  const [isOpen, setIsOpen] = useState(!!inActivePath);

  function buildLink(link) {
    const activeClass = link.url === currentPathname ? 'active' : '';
    return (
      <Link href={link.url} className={`${classBase}__link ${activeClass}`}>
        {link.title}
      </Link>
    );
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <li key={item.id} className={`${classBase}__li`}>
      {buildLink(item)}
      {hasChildren && (
        <button
          className={`${classBase}__show-menu`}
          aria-expanded={isOpen}
          aria-label="Menu Toggle"
          type="button"
          onClick={toggleMenu}
        >
          <span className={isOpen ? 'open' : 'closed'}>
            <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
          </span>
        </button>
      )}
      {isOpen && children}
    </li>
  );
};

const Menu = ({ value }) => {
  const [menuTree, setMenuTree] = useState({});
  const [currentPathname, setcurrentPathname] = useState('');
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    setcurrentPathname(window.location.pathname);
  }, [currentPathname, query]);

  useEffect(() => {
    const menuMachineName = () => {
      let convertedValue = '';
      if (value === 'Odds and Ends') {
        convertedValue = 'Odds Ends';
      } else {
        convertedValue = value;
      }
      const tranformedValue = convertedValue.toLowerCase().split(' ').join('-');
      let menuName = '';
      if (
        tranformedValue === 'fate-horror-toolkit' ||
        tranformedValue === 'fate-accessibility-toolkit' ||
        tranformedValue === 'fate-space-toolkit'
      ) {
        menuName = tranformedValue;
      } else {
        menuName = `menu-${tranformedValue}`;
      }
      return menuName;
    };

    async function getMenus() {
      const menuName = menuMachineName();
      const { tree } = await drupal.getMenu(menuName);
      setMenuTree(tree);
    }

    getMenus();
  }, [value, query]);

  function buildMenu(menuArray) {
    if (!menuArray) {
      return;
    }
    return Object.values(menuArray).map((item) => {
      const hasChildren = item?.items !== undefined;
      const inActivePath = () => {
        if (typeof item?.items !== 'undefined') {
          return Object.values(item?.items).some(
            (v) => v?.url === currentPathname
          );
        }
        return false;
      };
      const inActivePathBool = inActivePath();
      const children = hasChildren && (
        <ul className={`${classBase}__ul ${classBase}__ul--child`}>
          {buildMenu(item.items, currentPathname)}
        </ul>
      );
      return (
        <LinkWithChildren
          key={item.id}
          hasChildren={hasChildren}
          item={item}
          currentPathname={currentPathname}
          inActivePath={inActivePathBool}
        >
          {children}
        </LinkWithChildren>
      );
    });
  }

  return (
    <nav className={`${classBase}__nav`} aria-label="Menu" role="navigation">
      <ul className={`${classBase}__ul`}>{buildMenu(menuTree)}</ul>
    </nav>
  );
};

export default Menu;
