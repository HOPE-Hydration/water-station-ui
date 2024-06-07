// components/BackgroundMedia.js
import React from 'react';
import PropTypes from 'prop-types';

const BackgroundMedia = ({ src }) => {
  return (
    <div style={styles.container}>
      <img src={src} alt="Background" style={styles.media} />
    </div>
  );
};

BackgroundMedia.propTypes = {
  src: PropTypes.string.isRequired,
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