// components/DispensingScreen.js
import React from 'react';
import PropTypes from 'prop-types';
import BackgroundMedia from './BackgroundMedia';
import TextOverlay from './TextOverlay';

const DispensingScreen = ({ fluidOunces, backgroundMedia, text }) => {
  return (
    <div style={styles.container}>
      <BackgroundMedia src={backgroundMedia.src} type={backgroundMedia.type} />
      <TextOverlay text={text} data={{ fluidOunces }} />
    </div>
  );
};

DispensingScreen.propTypes = {
  fluidOunces: PropTypes.number.isRequired,
  backgroundMedia: PropTypes.shape({
    src: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['image', 'video', 'gif']).isRequired,
  }).isRequired,
  // mediaType: PropTypes.oneOf(['image', 'video', 'gif']).isRequired,
  text: PropTypes.shape({
    content: PropTypes.string.isRequired,
    font: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    position: PropTypes.oneOf(['top', 'center', 'bottom']),
  }).isRequired,
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
};

export default DispensingScreen;