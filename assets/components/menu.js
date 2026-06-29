import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/pro-solid-svg-icons';
import { useRouter } from 'next/router';
import { getStaticMenuByValue } from '../../lib/static-menus';

const classBase = 'nav-in-page';

const LinkWithChildren = ({
  children,
  hasChildren,
  item,
  currentPathname,
  isOpen,
  onToggle,
}) => {
  function buildLink(link) {
    const activeClass = link.url === currentPathname ? 'active' : '';
    return (
      <Link href={link.url} className={`${classBase}__link ${activeClass}`}>
        {link.title}
      </Link>
    );
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
          onClick={() => onToggle(item.id)}
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

function collectCollapsibleIds(menuArray, acc = new Set()) {
  if (!menuArray) {
    return acc;
  }
  Object.values(menuArray).forEach((item) => {
    if (item?.items !== undefined) {
      acc.add(item.id);
      collectCollapsibleIds(item.items, acc);
    }
  });
  return acc;
}

function collectActivePathIds(menuArray, pathname, acc = new Set()) {
  let found = false;
  if (!menuArray || !pathname) {
    return found;
  }
  Object.values(menuArray).forEach((item) => {
    let childFound = false;
    if (item?.items !== undefined) {
      childFound = collectActivePathIds(item.items, pathname, acc);
      if (childFound) {
        acc.add(item.id);
      }
    }
    if (item?.url === pathname || childFound) {
      found = true;
    }
  });
  return found;
}

const Menu = ({ value }) => {
  const [menuTree, setMenuTree] = useState({});
  const [currentPathname, setCurrentPathname] = useState('');
  const [openIds, setOpenIds] = useState(new Set());
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    setCurrentPathname(window.location.pathname);
  }, [currentPathname, query]);

  useEffect(() => {
    const tree = getStaticMenuByValue(value);
    setMenuTree(tree);
  }, [value]);

  useEffect(() => {
    const activeIds = new Set();
    collectActivePathIds(menuTree, currentPathname, activeIds);
    if (activeIds.size > 0) {
      setOpenIds((prev) => new Set([...prev, ...activeIds]));
    }
  }, [menuTree, currentPathname]);

  function toggleSection(id) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  const collapsibleIds = collectCollapsibleIds(menuTree);
  const allOpen =
    collapsibleIds.size > 0 &&
    [...collapsibleIds].every((id) => openIds.has(id));

  function expandAll() {
    setOpenIds(new Set(collapsibleIds));
  }

  function collapseAll() {
    setOpenIds(new Set());
  }

  function buildMenu(menuArray) {
    if (!menuArray) {
      return;
    }

    if (Object.keys(menuArray).length > 0) {
      return Object.values(menuArray).map((item) => {
        const hasChildren = item?.items !== undefined;
        const children = hasChildren && (
          <ul
            className={`${classBase}__ul ${classBase}__ul--child`}
            key={classBase}
          >
            {buildMenu(item.items, currentPathname)}
          </ul>
        );
        return (
          <LinkWithChildren
            key={item.id}
            hasChildren={hasChildren}
            item={item}
            currentPathname={currentPathname}
            isOpen={openIds.has(item.id)}
            onToggle={toggleSection}
          >
            {children}
          </LinkWithChildren>
        );
      });
    }
    return [1, 1, 1, 1, 1, 1].map((_value, key) => (
      <li className="nav-in-page__li" key={key}>
        <span className="nav-in-page__skeleton" />
      </li>
    ));
  }

  return (
    <nav className={`${classBase}__nav`} aria-label="Menu" role="navigation">
      {collapsibleIds.size > 0 && (
        <button
          className={`${classBase}__expand-all`}
          type="button"
          aria-expanded={allOpen}
          onClick={allOpen ? collapseAll : expandAll}
        >
          <FontAwesomeIcon icon={allOpen ? faMinus : faPlus} />
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      )}
      <ul className={`${classBase}__ul`}>{buildMenu(menuTree)}</ul>
    </nav>
  );
};

export default Menu;
