import React, { useState } from 'react';

import Tag from './Tag';

import { IoIosStar } from "react-icons/io";
import Sparkle from '../assets/favicon.svg';
import { RiEmotionHappyLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";

import footerStars from '../assets/footer-stars.png';

import { useNavigate } from 'react-router-dom';
import { routes } from "../routes/Routes";

export default function Footer() {
  // Initial state for toggling image display
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility state
  const toggleImage = () => {
    setIsVisible(prevState => !prevState);
  };

  const navigate = useNavigate();

  return (
    <footer className='marginsPrimary'>

      {/* Footer all text autolayout */}
      <div className='autoLayoutDownAlignCenter' style={{gap: '3rem', paddingBottom: '2rem',}}>
        <hr />

        {/* Footer main text */}
        <div className='autoLayoutDownAlignTop' style={{gap: '2.15rem', paddingBottom: '1.25rem',}}>
            
            {/* Footer header */}
            <div className='autoLayoutRightAlignLeftCenter gapSmallTagInlineText footerHeader'>
              {/* <div className='autoLayoutRightAlignLeftCenter gapSmallTagInlineText'>
                <div className='autoLayoutRightAlignLeftCenter responsiveAutoLayoutRightCenter gapSmallTagInlineText'>
                  <h4>Let's</h4>
                  <div className="hoverContainer">
                      <div className="hoverContainerTag" onClick={toggleImage}>
                        <Tag theme="primaryBlue" size="mini" icon={IoIosStar} text="collab" />
                      </div>
                      <div className="popupImage collab" style={{ display: isVisible ? 'block' : 'none', maxWidth: '60%', }}>
                          <img src={footerStars} alt="Stars" className='image' style={{borderRadius: '0rem'}}/>
                      </div>
                  </div>
                  <h4>on</h4>
                </div>
                <h4 style={{ whiteSpace: 'nowrap'}} >something amazing (and</h4>
              </div>
              <h4 style={{ whiteSpace: 'nowrap'}} >have fun along the way)!</h4> */}
              <h4>Let's <span style={{color: 'var(--PRIMARY-BLUE-500)'}}>collab</span> on something amazing (and have fun along the way)!</h4>
              <div>
                <RiEmotionHappyLine style={{fontSize: '1.75rem', marginRight: '0.45rem'}} className="footerEmojis" />
                <img src={Sparkle} alt="Sparkle" width="24" height="24" className="footerEmojis" style={{marginBottom: '0.15rem'}}/>
              </div>
            </div>

            {/* List of links */}
            <div className='autoLayoutRightAlignLeftCenter responsiveAutoLayoutRightCenter footerLinks' style={{gap: '3rem',}}>
              <a href="\"><FaArrowRightLong style={{paddingTop: '0.25rem', marginRight: '0.25rem'}} />Work</a>
              <a onClick={() => { navigate(routes.about); window.scrollTo({ top: 0, left:0, behavior: "instant"})}}><FaArrowRightLong style={{paddingTop: '0.25rem', marginRight: '0.25rem'}} />About</a>
              <a href="mailto:@stacykwok01@gmail.com" target="_blank" rel="noopener noreferrer"><FaArrowRightLong style={{paddingTop: '0.25rem', marginRight: '0.25rem'}} />Email</a>
              <a href="https://www.linkedin.com/in/stacykwok-01/" target="_blank" rel="noopener noreferrer"><FaArrowRightLong style={{paddingTop: '0.25rem', marginRight: '0.25rem'}} />LinkedIn</a>
            </div>
        </div>

        {/* Footer center aligned footnote */}
        <div style={{textAlign: 'center',}}>
            <p className='footerFootnote' style={{color: 'var(--GREY-500)'}}>
              Portfolio made with 10,975 minutes of Spotify music, 81 Github commits (eep!), and lots of love
            </p>
        </div>
      </div>
    </footer>
  );
}
