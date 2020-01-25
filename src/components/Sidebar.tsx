import React from 'react';
import SidebarOptions from './SidebarOptions';
import { NavigationProps } from '../types';

import { ReactComponent as MowheeLogo } from '../img/logo.svg';
import '../styles/components/Sidebar.scss';

const Sidebar: React.FC<NavigationProps> = ({ browse, categories }) => {
  return (
    <section className='Sidebar'>
      {/* Logo portion */}
      <div className='Sidebar__logo'>
        <h1 className='Sidebar__logo--name'>Mowhee</h1>
        <MowheeLogo className='Sidebar__logo--img' />
      </div>
      {/* First navigation */}
      <SidebarOptions isOptions browse={browse} />
      {/* Second navigation */}
      <SidebarOptions isOptions={false} categories={categories} />
    </section>
  );
};

export default Sidebar;
