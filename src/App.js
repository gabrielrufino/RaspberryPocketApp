import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, StatusBar} from 'react-native';

import BottomNavigator from './BottomNavigator';
import pallete from './styles/pallete';

const App = () => {
  useEffect(() => {
    import('./services/server').then((server) => {
      server.socket.on('connect', () => {
        console.log('Connected to the server');
      });
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={pallete.primary} />
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
