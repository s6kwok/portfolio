import React from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from "../routes/Routes";

const NavTabs = ({ activeTab, onTabChange }) => {
  const navigate = useNavigate();

  // Active tab logic
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

  // Styling
  const navTabsStyling = {
    padding: '0rem',
    gap: '3.375rem',
    width: 'max-content',
  };

  return (
    <div className='autoLayoutRightAlignLeftCenter responsiveAutoLayoutRightCenter' style={navTabsStyling}>

      {/* Design Tab */}
      <p
        className={activeTab === 'Design' ? 'navActive' : 'navInactive'}
        onClick={() => handleTabClick('Design')}
      >
        Work
      </p>

      {/* About Tab */}
      <p
        className={activeTab === 'About' ? 'navActive' : 'navInactive'}
        onClick={() => handleTabClick('About')}
      >
        About
      </p>

      {/* Resume Link */}
      {/* href={routes.designSystem} */}
      <a href="/stacykwok-resume.pdf" target="_blank" rel="noopener noreferrer" className="navInactive">Resume</a>
    </div>
  );
};

export default NavTabs;
