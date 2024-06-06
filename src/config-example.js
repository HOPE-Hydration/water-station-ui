// config.js
const config = {
    idleScreen: {
      backgroundMedia: {
        src: '/idle.mp4',
        type: 'video',
      },
      text: {
        content: 'Total Bottles Dispensed: {totalBottles}',
        font: 'Arial',
        size: '24px',
        color: 'white',
        position: 'center',
      },
    },
    dispensingScreen: {
      backgroundMedia: {
        src: '/dispensing.jpg',
        type: 'image',
      },
      text: {
        content: 'Fluid Ounces Dispensed: {fluidOunces}',
        font: 'Arial',
        size: '24px',
        color: 'white',
        position: 'center',
      },
    },
  };
  
  export default config;