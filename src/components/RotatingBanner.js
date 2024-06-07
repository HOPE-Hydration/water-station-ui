// components/RotatingBanner.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './RotatingBanner.css';


const RotatingBanner = ({ bannerImage }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="rotating-banner-container">
      <div className={`rotating-banner ${loaded ? 'loaded' : ''}`}>
        <img src={bannerImage} alt="Banner" onLoad={handleImageLoad} />
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
};
// const RotatingBanner = ({ bannerImage }) => {
//   const [loaded, setLoaded] = useState(false);
  
//   useEffect(() => {
//     const preloadImage = new Image();
//     preloadImage.src = bannerImage;
//     preloadImage.onload = () => {
//       setLoaded(true);
//     };
//   }, [bannerImage]);

//   return (
//     <div className="rotating-banner-container">
//       <div
//         className={`rotating-banner ${loaded ? 'loaded' : ''}`}
//       >
//         <img src={bannerImage} alt="Banner" />
//         <img src={bannerImage} alt="Banner" />
//       </div>
//     </div>
//   );
// };

RotatingBanner.propTypes = {
  bannerImage: PropTypes.string.isRequired,
};

export default React.memo(RotatingBanner);