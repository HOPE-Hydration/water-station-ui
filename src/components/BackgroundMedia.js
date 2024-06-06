// components/BackgroundMedia.js
import React from 'react';
import PropTypes from 'prop-types';

const BackgroundMedia = ({ src, type }) => {
  const renderMedia = () => {
    switch (type) {
      case 'image':
        return <img src={src} alt="Background" style={styles.media} />;
      case 'video':
        return (
          <video src={src} autoPlay loop muted playsInline style={styles.media} />
        );
      case 'gif':
        return <img src={src} alt="Background" style={styles.media} />;
      default:
        return null;
    }
  };

  return <div style={styles.container}>{renderMedia()}</div>;
};

BackgroundMedia.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['image', 'video', 'gif']).isRequired,
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  media: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default BackgroundMedia;