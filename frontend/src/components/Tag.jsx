import React from "react";

import { IoIosStar } from "react-icons/io";

// Define tag color theme mapping
const tagColorThemes = {
    primaryBlue: {
      outlineColor: 'var(--PRIMARY-BLUE-300)',
      iconColor: 'var(--PRIMARY-BLUE-500)',
      backgroundColor: 'var(--PRIMARY-BLUE-200)',
    },
    orange: {
        outlineColor: 'var(--ORANGE-300)',
        iconColor: 'var(--ORANGE-500)',
        backgroundColor: 'var(--ORANGE-200)',
    },
    blue: {
        outlineColor: 'var(--BLUE-300)',
        iconColor: 'var(--BLUE-500)',
        backgroundColor: 'var(--BLUE-200)',
    },
    pink: {
        outlineColor: 'var(--PINK-300)',
        iconColor: 'var(--PINK-500)',
        backgroundColor: 'var(--PINK-200)',
    },
    green: {
        outlineColor: 'var(--GREEN-300)',
        iconColor: 'var(--GREEN-500)',
        backgroundColor: 'var(--GREEN-200)',
    },
};

export default function Tag({ theme, size, icon: Icon, text }) {
  // Get colors based on the selected theme
  // Default to blue if theme not recognized
  const { outlineColor, iconColor, backgroundColor } = (tagColorThemes[theme] || tagColorThemes.primaryBlue);

  const tagStyles = {
    large: {
        display: 'flex',
        padding: '0.75rem 1.25rem 0.5rem 1.15rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.025rem',
        width: 'max-content',
        
        borderRadius: '3rem',
        border: `3px solid ${outlineColor}`,
        backgroundColor: backgroundColor,
    },
    medium: {
        display: 'flex',
        padding: '0.5rem 1.25rem 0.4rem 1rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.875rem',
        width: 'max-content',
        
        borderRadius: '3rem',
        border: `3px solid ${outlineColor}`,
        backgroundColor: backgroundColor,
    },
    small: {
        display: 'flex',
        padding: '0.75rem 1.45rem 0.45rem 1.35rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.925rem',
        width: 'max-content',
        
        borderRadius: '3rem',
        border: `3px solid ${outlineColor}`,
        backgroundColor: backgroundColor,
    },
    mini: {
        display: 'flex',
        padding: '0.55rem 1.15rem 0.35rem 1rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.675rem',
        width: 'max-content',
        
        borderRadius: '3rem',
        border: `3px solid ${outlineColor}`,
        backgroundColor: backgroundColor,
    },
  }

  // Determine the final size to use
  const finalSize = ['large', 'medium', 'small', 'mini'].includes(size) ? size : 'large';

  // Set icon size based on tag size
  const iconSize = {
    large: '36px',
    medium: '34px',
    small: '32px',
    mini: '32px',
  }[finalSize];

  // Function to render text based on textStyle prop
  const TagText = () => {
    if (size === 'mini') {
        return <h5>{text}</h5>;
    } else if (size === 'small') {
        return <h4>{text}</h4>;
    } else if (size === 'medium') {
        return <h3>{text}</h3>;
    } else {
        return <span className="h2-medium">{text}</span>;
    }
  };

  // Determine which icon to use, defaulting to IoIosStar
  // Use IoIosStar if Icon is not provided
  const RenderIcon = Icon || IoIosStar;

  return (
    // Return styled tag based on input params of size, color theme, icon, input text
    <div style={{...tagStyles[finalSize],}}>
      {RenderIcon && <Icon style={{ color: iconColor, fontSize: iconSize }} />}
      <TagText />
    </div>
  );
}
