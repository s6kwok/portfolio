import Tag from './Tag';
import { IoIosStar } from "react-icons/io";
import React from 'react';

export default function Footer() {
  const footerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const leftAlignedStyle = {
    marginLeft: '6.25rem',
    marginRight: '6.25rem',
    textAlign: 'left',
  };

  const centerAlignedStyle = {
    textAlign: 'center',
    paddingTop: '3.85rem',
    paddingBottom: '0.25rem',
  };

  return (
    <footer style={footerStyle}>
        <div style={leftAlignedStyle}>
            <hr />
            <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                paddingTop: '2.5rem',
            }}
            >
                <h5>Let's</h5>
                <Tag theme="primaryBlue" size="mini" icon={IoIosStar} text="collab" />
                <h5>on something amazing (and have fun along the way)!</h5>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '2.275rem',
                paddingTop: '2.15rem',
            }}
            >
            <a href="mailto:@s6kwok@uwaterloo.ca" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://www.linkedin.com/in/stacykwok-01/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
        <div style={centerAlignedStyle}>
            <p>Portfolio made with 10000 hours of <a href="https://open.spotify.com/playlist/4Fht6C4JCWNXLrvRjvgQNO?si=92541bf64c9245d2" target="_blank" rel="noopener noreferrer">Spotify music</a>, 10000 <a href="https://github.com/s6kwok" target="_blank" rel="noopener noreferrer">Github commits</a> (eep!), and lots of love.</p>
        </div>
    </footer>
  );
}
