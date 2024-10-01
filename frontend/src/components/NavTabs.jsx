import React from 'react';
import './NavTabs.css';

export default function NavTabs({ activeTab, onTabChange }) {
  const tabs = ['Design', 'About', 'Resume'];

  const handleClick = (tab) => {
    // Change the active tab to the clicked one
    onTabChange(tab);
  };

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {tabs.map((tab) => (
        <p
          key={tab}
          className={activeTab === tab ? 'nav-active' : 'nav-inactive'}
          style={{ 
            color: activeTab === tab ? 'var(--PRIMARY-BLUE-500)' : 'inherit',
            cursor: 'pointer' // Make sure the cursor indicates it's clickable
          }}
          onClick={() => handleClick(tab)} // Clicking will always set this tab as active
        >
          {tab}
        </p>
      ))}
    </div>
  );
}
