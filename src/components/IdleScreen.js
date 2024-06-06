// components/IdleScreen.js
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import BackgroundMedia from './BackgroundMedia';
import TextOverlay from './TextOverlay';
import RotatingBanner from './RotatingBanner';
import CountUp from 'react-countup';

const IdleScreen = ({ totalBottles, backgroundMedia, text, bannerImage }) => {
  const prevTotalBottlesRef = useRef(totalBottles);

  useEffect(() => {
    prevTotalBottlesRef.current = totalBottles;
  }, [totalBottles]);

  return (
    <div style={styles.container}>
      <BackgroundMedia src={backgroundMedia.src} type={backgroundMedia.type} />
      <RotatingBanner bannerImage={bannerImage} />
      <TextOverlay text={text}>
        <CountUp
          start={prevTotalBottlesRef.current}
          end={totalBottles}
          duration={2}
          delay={0}
        />
      </TextOverlay>
    </div>
  );
};

IdleScreen.propTypes = {
  totalBottles: PropTypes.number.isRequired,
  backgroundMedia: PropTypes.shape({
    src: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['image', 'video', 'gif']).isRequired,
  }).isRequired,
  text: PropTypes.shape({
    // content: PropTypes.string.isRequired,
    font: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string,
  }).isRequired,
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
};

export default IdleScreen;