import React from 'react';

import Tag from './Tag';

import { IoIosStar } from "react-icons/io";

import footerStars from '../assets/footer-stars.png';

export default function Footer() {
  return (
    <footer className='marginsPrimary'>

      {/* Footer all text autolayout */}
      <div className='autoLayoutDownAlignCenter' style={{gap: '3rem', paddingBottom: '2rem',}}>
        <hr />

        {/* Footer main text */}
        <div className='autoLayoutDownAlignTop' style={{gap: '2.15rem', paddingBottom: '1.25rem',}}>
            
            {/* Footer header */}
            <div className='autoLayoutRightAlignLeftCenter gapSmallTagInlineText footer-header'>
              <div className='autoLayoutRightAlignLeftCenter gapSmallTagInlineText'>
                <div className='autoLayoutRightAlignLeftCenter responsiveAutoLayoutRightCenter gapSmallTagInlineText'>
                  <h4>Let's</h4>
                  {/* <Tag theme="primaryBlue" size="mini" icon={IoIosStar} text="collab" /> */}
                  <div class="hover-container">
                      <div class="hover-container-tag">
                        <Tag theme="primaryBlue" size="mini" icon={IoIosStar} text="collab" />
                      </div>
                      <div class="popup-image stars" style={{maxWidth: '60%'}}>
                          <img src={footerStars} alt="Stars" className='image' style={{borderRadius: '0rem'}}/>
                      </div>
                  </div>
                  <h4>on</h4>
                </div>
                <h4 style={{ whiteSpace: 'nowrap'}} >something amazing (and</h4>
              </div>
              <h4 style={{ whiteSpace: 'nowrap'}} >have fun along the way)!</h4>
            </div>

            {/* List of links */}
            <div className='autoLayoutRightAlignLeftCenter responsiveAutoLayoutRightCenter footer-links' style={{gap: '2.275rem',}}>
            <a href="\">Home</a>
              <a href="mailto:@s6kwok@uwaterloo.ca" target="_blank" rel="noopener noreferrer">Email</a>
              <a href="https://www.linkedin.com/in/stacykwok-01/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>

        {/* Footer center aligned footnote */}
        <div style={{textAlign: 'center',}}>
            <p className='footer-footnote'>
              Portfolio made with <a href="https://open.spotify.com/playlist/4Fht6C4JCWNXLrvRjvgQNO?si=92541bf64c9245d2" target="_blank" rel="noopener noreferrer">10,975 minutes of Spotify music</a>, <a href="https://github.com/s6kwok" target="_blank" rel="noopener noreferrer">350 Github commits</a> (eep!), and lots of love.
            </p>
        </div>
      </div>
    </footer>
  );
}
