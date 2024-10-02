import React, { useState } from 'react';
import NavTabs from './NavTabs';
import { routes } from "../routes/Routes";

export default function Header({defaultActiveTab}) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '2rem',
    position: 'relative',
  };

  const nameStyles = {
    marginLeft: '6.25rem',
    paddingLeft: '1.25rem',
  };

  const navTabsStyles = {
    marginRight: '6.25rem',
    paddingRight: '1.25rem',
  };

  return (
    <header style={headerStyles}>
        <div style={nameStyles}>
            <a href={routes.designSystem} className="logo">Stacy Kwok</a>
        </div>
        <div style={navTabsStyles}>
            <NavTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
    </header>
  );
}
