import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/pro-solid-svg-icons';
import { drupal } from '../../lib/drupal';

const classBase = 'nav-in-page';

const LinkWithChildren = ({ children, hasChildren, item }) => {
  const [isOpen, setIsOpen] = useState(false);

  function buildLink(link) {
    const href = link.url;
    const className = classBase ? `${classBase}__link` : '';
    const props = {
      activeClassName: 'active',
      className,
      href,
    };
    return <Link {...props}>{link.title}</Link>;
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

  useEffect(() => {
    const menuMachineName = () => {
      const tranformedValue = value.toLowerCase().split(' ').join('-');
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
  }, [value]);

  function buildMenu(menuArray) {
    if (!menuArray) {
      return;
    }
    return Object.values(menuArray).map((item) => {
      console.log(item.title, item.items);
      const hasChildren = item?.items !== undefined;
      const children = hasChildren && (
        <ul className={`${classBase}__ul ${classBase}__ul--child`}>
          {buildMenu(item.items)}
        </ul>
      );
      return (
        <LinkWithChildren key={item.id} hasChildren={hasChildren} item={item}>
          {children}
        </LinkWithChildren>
      );
    });
  }

  return (
    <nav
      className={`${classBase}__nav`}
      aria-label="INSERT Menu"
      role="navigation"
    >
      <ul className={`${classBase}__ul`}>{buildMenu(menuTree)}</ul>
    </nav>
  );
};

export default Menu;
