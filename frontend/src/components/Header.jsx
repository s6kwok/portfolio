import React, { useState } from 'react';

import NavTabs from './NavTabs';

import { routes } from "../routes/Routes";

import Sparkle from '../assets/favicon.svg';

import '../styles/Home.css';

export default function Header({defaultActiveTab}) {
  // Store desired default active tab
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <header className='marginsPrimary autoLayoutRightSplit' style={{paddingTop: '2rem', gap: '1.25rem'}}>

        {/* Logo */}
        {/* <a href={routes.designSystem} className="logo">Stacy Kwok</a> */}
        <div className="logo-hover-container">
          <a href={routes.index} className="logo">Stacy Kwok</a>
          {/* < HiSparkles class="logo-hover-content" style={{marginLeft: '0.45rem'}} /> */}
          <img src={Sparkle} alt="Sparkle" width="14" height="14" class="logo-hover-content" style={{marginLeft: '0.55rem'}} />
        </div>

        {/* Tabs */}
        <NavTabs activeTab={activeTab} onTabChange={setActiveTab} />
    </header>
  );
}
