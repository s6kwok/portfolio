import React from 'react';

// Define circle number color theme mapping
const colorStyles = {
  primaryBlue: {
    border: '2px solid var(--PRIMARY-BLUE-500)',
    backgroundColor: 'var(--PRIMARY-BLUE-100)',
    color: 'var(--PRIMARY-BLUE-500)',
  },
  orange: {
    border: '2px solid var(--ORANGE-500)',
    backgroundColor: 'var(--ORANGE-100)',
    color: 'var(--ORANGE-500)',
  },
  blue: {
    border: '2px solid var(--BLUE-500)',
    backgroundColor: 'var(--BLUE-100)',
    color: 'var(--BLUE-500)',
  },
  pink: {
    border: '2px solid var(--PINK-500)',
    backgroundColor: 'var(--PINK-100)',
    color: 'var(--PINK-500)',
  },
  green: {
    border: '2px solid var(--GREEN-500)',
    backgroundColor: 'var(--GREEN-100)',
    color: 'var(--GREEN-500)',
  },
};

// Define circle css
const circleStyles = {
  width: '42px',
  height: '42px',
  borderRadius: '50%',
};

const CircleNumber = ({ number = 1, colorTheme = 'primaryBlue' }) => {
  // Get the styles based on colorTheme prop
  // Default to primary blue theme if not defined
  const selectedColorStyles = colorStyles[colorTheme] || colorStyles.primaryBlue;

  return (
    // Return circle given input of color theme and number
    <div className="autoLayoutRightAlignCenter b3" style={{ ...circleStyles, ...selectedColorStyles, }}>
      {number}
    </div>
  );
};

export default CircleNumber;
