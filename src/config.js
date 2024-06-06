// config.js
const config = {
    idleScreen: {
      backgroundMedia: {
        src: '/idle.png',
        type: 'image',
      },
      text: {
        content: '{totalBottles}',
        font: 'Arial',
        size: '70px',
        color: 'white',
        // position: 'center',
        top: '270px',
        left: '320px'
      },
      bannerImage: '/banner.svg'
    },
    dispensingScreen: {
      backgroundMedia: {
        src: '/dispensing.png',
        type: 'image',
      },
      text: {
        content: 'Fluid Ounces Dispensed: {fluidOunces}',
        font: 'Arial',
        size: '24px',
        color: 'white',
        // position: 'center',
        top: '200px',
        left: '50px'
      },
    },
  };
  
  export default config;