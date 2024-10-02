import React from 'react';

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

const circleStyles = {
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const CircleNumber = ({ number = 1, colorTheme = 'primaryBlue' }) => {
  // Get the styles based on colorTheme prop
  const selectedColorStyles = colorStyles[colorTheme] || colorStyles.primaryBlue;

  return (
    <div style={{ ...circleStyles, ...selectedColorStyles }} className="b3">
      {number}
    </div>
  );
};

export default CircleNumber;
