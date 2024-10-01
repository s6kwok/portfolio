import React from 'react';
import './NavTabs.css';

export default function NavTabs({ activeTab = null, onTabChange }) {
  const tabs = ['Design', 'About', 'Resume'];

  const handleClick = (tab) => {
    if (tab === activeTab) {
      onTabChange(null); // Deselect the tab if it is already active
    } else {
      onTabChange(tab); // Set the clicked tab as active
    }
  };

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {tabs.map((tab) => (
        <p
          key={tab}
          className={activeTab === tab ? 'nav-active' : 'nav-inactive'}
          style={{ color: activeTab === tab ? 'var(--PRIMARY-BLUE-500)' : 'inherit' }}
          onClick={() => handleClick(tab)}
        >
          {tab}
        </p>
      ))}
    </div>
  );
}
