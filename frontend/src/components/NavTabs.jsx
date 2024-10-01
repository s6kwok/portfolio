import React from 'react';
import './NavTabs.css';
import { useNavigate } from 'react-router-dom';


const NavTabs = ({ activeTab, onTabChange }) => {
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    if (activeTab !== tab) {
      onTabChange(tab);
    }
    if (tab === 'Design') {
      navigate('/');
    } else if (tab === 'About') {
      navigate('/about');
    }
  };

  return (
    <div className="nav-tabs">
      {/* Design Tab */}
      <p
        className={activeTab === 'Design' ? 'nav-active' : 'nav-inactive'}
        onClick={() => handleTabClick('Design')}
      >
        Design
      </p>

      {/* About Tab */}
      <p
        className={activeTab === 'About' ? 'nav-active' : 'nav-inactive'}
        onClick={() => handleTabClick('About')}
      >
        About
      </p>

      {/* Resume Link */}
      <a
        href="/design-system"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-inactive"
      >
        Resume
      </a>
    </div>
  );
};

export default NavTabs;
