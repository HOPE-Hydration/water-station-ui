// components/TextOverlay.js
import React from 'react';
import PropTypes from 'prop-types';
import './TextOverlay.css';

const TextOverlay = ({ text, children }) => {
  const { font, size, color } = text;

  return (
    <div
      className="text-overlay-container"
    >
      <div
        className="text-overlay-text"
        style={{
          fontFamily: font,
          fontSize: size,
          color: color,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="total-bottles">{children}</div>
        <div className="text-overlay-subtitle">
          <div>Plastic Bottles</div>
          <div>Saved</div>
        </div>
      </div>
    </div>
  );
};

TextOverlay.propTypes = {
  text: PropTypes.shape({
    content: PropTypes.string.isRequired,
    font: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
};


export default TextOverlay;