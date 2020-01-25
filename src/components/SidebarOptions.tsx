import React from 'react';
import { Link } from 'react-router-dom';
import {
  CategoriesType,
  BrowseType,
  SidebarNavigationGenerator
} from '../types';

type SidebarOptions =
  | {
      isOptions: true;
      browse: BrowseType;
      categories?: never;
    }
  | {
      isOptions: false;
      categories: CategoriesType;
      browse?: never;
    };

const generateNavItem = ({
  option,
  navName,
  key
}: SidebarNavigationGenerator): JSX.Element => (
  <li className={`Sidebar__${navName}-item Sidebar__${navName}-item--${key}`}>
    <Link
      to={``}
      className={`Sidebar__${navName}-link Sidebar__${navName}-link--${key}`}>
      {option}
    </Link>
  </li>
);

const SidebarOptions: React.FC<SidebarOptions> = ({
  isOptions,
  browse,
  categories
}) => {
  const navName = isOptions ? 'browse' : 'categories';
  return (
    <div className={`sidebar__${navName}`}>
      <h2 className={`sidebar__${navName}-title secondary-heading`}>
        {isOptions ? 'Browse Mowhee' : 'Categories'}
      </h2>
      <nav className={`sidebar__${navName}-nav`}>
        <ul className={`sidebar__${navName}-list`}>
          {isOptions
            ? browse!.map((item, index) =>
                generateNavItem({ navName, option: item, key: index })
              )
            : categories!.map((item, index) =>
                generateNavItem({ navName, option: item, key: index })
              )}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarOptions;
