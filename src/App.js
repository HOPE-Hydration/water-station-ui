// app.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import IdleScreen from './components/IdleScreen';
import DispensingScreen from './components/DispensingScreen';
import config from './config';

const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5001';

const App = () => {
  const [state, setState] = useState('IDLE');
  const [totalBottles, setTotalBottles] = useState(0);
  const [fluidOunces, setFluidOunces] = useState(0);

  useEffect(() => {
    const socket = io(SERVER_URL);

    socket.onAny((eventName, ...args) => {
      console.log(`Received event: ${eventName}`, args);
    });

    socket.on('state_change', (data) => {
      console.log('State Changing');
      console.log(data.state);
      setState(data.state);
    });

    socket.on('flow_meter_update', (data) => {
      setFluidOunces(data.fluid_ounces);
    });

    socket.on('total_bottles_update', (data) => {
      setTotalBottles(data.total_bottles);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div style={styles.app}>
      {state === 'IDLE' && (
        <IdleScreen
          totalBottles={totalBottles}
          backgroundMedia={config.idleScreen.backgroundMedia}
          text={config.idleScreen.text}
          bannerImage={config.idleScreen.bannerImage}
        />
      )}
      {state === 'DISPENSING' && (
        <DispensingScreen
          fluidOunces={fluidOunces}
          backgroundMedia={config.dispensingScreen.backgroundMedia}
          text={config.dispensingScreen.text}
        />
      )}
    </div>
  );
};

const styles = {
  app: {
    width: '100vw',
    height: '100vh',
    aspectRatio: '16/9',
    overflow: 'hidden',
  },
};

export default App;