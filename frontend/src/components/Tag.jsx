import React from "react";

import { IoIosStar } from "react-icons/io";
import '../styles/Home.css';

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

export default function Tag({ theme, size, icon: Icon, text, style }) {
  // Get colors based on the selected theme
  // Default to blue if theme not recognized
  const { outlineColor, iconColor, backgroundColor } = (tagColorThemes[theme] || tagColorThemes.primaryBlue);

  const tagStyles = {
    large: {
        display: 'flex',
        padding: '0.45rem 1.45rem 0.15rem 1.3rem',
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
        padding: '0.65rem 1.45rem 0.5rem 1.2rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.875rem',
        width: 'max-content',
        height: '82px',

        borderRadius: '3rem',
        border: `3px solid ${outlineColor}`,
        backgroundColor: backgroundColor,
    },
    small: {
        display: 'flex',
        padding: '0.6rem 1.3rem 0.4rem 1.25rem',
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
        padding: '0.5rem 1.15rem 0.3rem 1rem',
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
        return <span className="tag-mini">{text}</span>;
    } else if (size === 'small') {
        return <span className="tag-small">{text}</span>;
    } else if (size === 'medium') {
        return <span className="tag-medium">{text}</span>;
    } else {
        return <span className="tag-large">{text}</span>;
    }
  };

  // Determine which icon to use, defaulting to IoIosStar
  // Use IoIosStar if Icon is not provided
  const RenderIcon = Icon || IoIosStar;

  const combinedStyles = {
    ...tagStyles[size],
    ...style, // Add the incoming style prop
  };

  return (
    // Return styled tag based on input params of size, color theme, icon, input text
    <div style={combinedStyles}>
      {RenderIcon && <Icon style={{ color: iconColor, fontSize: iconSize }} />}
      <TagText />
    </div>
  );
}
