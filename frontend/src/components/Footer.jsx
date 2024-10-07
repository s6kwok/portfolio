import React from 'react';

import Tag from './Tag';

import { IoIosStar } from "react-icons/io";

export default function Footer() {
  return (
    <footer className='marginsPrimary'>

      {/* Footer all text autolayout */}
      <div className='autoLayoutDownAlignCenter' style={{gap: '3.25rem', paddingBottom: '2rem',}}>
        <hr />

        {/* Footer main text */}
        <div className='autoLayoutDownAlignTop' style={{gap: '2.15rem', paddingBottom: '1.25rem',}}>
            
            {/* Footer header */}
            <div className='autoLayoutRightAlignLeftCenter gapSmallTagInlineText'>
                <h5>Let's</h5>
                <Tag theme="primaryBlue" size="mini" icon={IoIosStar} text="collab" />
                <h5>on something amazing (and have fun along the way)!</h5>
            </div>

            {/* List of links */}
            <div className='autoLayoutRightAlignLeftCenter' style={{gap: '2.275rem',}}>
              <a href="mailto:@s6kwok@uwaterloo.ca" target="_blank" rel="noopener noreferrer">Email</a>
              <a href="https://www.linkedin.com/in/stacykwok-01/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>

        {/* Footer center aligned footnote */}
        <div style={{textAlign: 'center',}}>
            <p>
              Portfolio made with 10,975 minutes of <a href="https://open.spotify.com/playlist/4Fht6C4JCWNXLrvRjvgQNO?si=92541bf64c9245d2" target="_blank" rel="noopener noreferrer">Spotify music</a>, 350 <a href="https://github.com/s6kwok" target="_blank" rel="noopener noreferrer">Github commits</a> (eep!), and lots of love.
            </p>
        </div>
      </div>
    </footer>
  );
}
