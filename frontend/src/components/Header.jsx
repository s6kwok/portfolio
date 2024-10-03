import React, { useState } from 'react';

import NavTabs from './NavTabs';

import { routes } from "../routes/Routes";

export default function Header({defaultActiveTab}) {
  // Store desired default active tab
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <header className='marginsPrimary autoLayoutRightEvenGap' style={{paddingTop: '2rem',}}>

        {/* Logo */}
        <a href={routes.designSystem} className="logo">Stacy Kwok</a>

        {/* Tabs */}
        <NavTabs activeTab={activeTab} onTabChange={setActiveTab} />
    </header>
  );
}
