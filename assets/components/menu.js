import { useEffect, useState } from 'react';
import Link from 'next/link';
import { drupal } from '../../lib/drupal';

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

  return (
    <div>
      <p>Menu</p>
      {value.toLowerCase().split(' ').join('-')}
      {Object.entries(menuTree).map(([key, v]) => (
        <li key={v.url + v.title}>
          {console.log(v.title, v)}
          <Link href={v.url}>{v.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default Menu;
