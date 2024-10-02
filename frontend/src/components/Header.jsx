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

  return (
    <header className='marginsPrimary' style={headerStyles}>
        <div>
            <a href={routes.designSystem} className="logo">Stacy Kwok</a>
        </div>
        <div>
            <NavTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
    </header>
  );
}
