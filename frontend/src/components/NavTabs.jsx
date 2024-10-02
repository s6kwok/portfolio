import React from 'react';
// import './NavTabs.css';
import { useNavigate } from 'react-router-dom';
import { routes } from "../routes/Routes";

const NavTabs = ({ activeTab, onTabChange }) => {
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    if (activeTab !== tab) {
      onTabChange(tab);
    }
    if (tab === 'Design') {
      navigate(routes.index);
    } else if (tab === 'About') {
      navigate(routes.about);
    }
  };

  const navTabsStyling = {
    display: 'flex',
    padding: '0rem',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '3.375rem',
    width: 'max-content',
  };

  return (
    <div style={navTabsStyling}>
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
        href={routes.designSystem}
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
