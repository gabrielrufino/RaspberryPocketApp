import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {NavigationContainer} from '@react-navigation/native';
import {Text, StatusBar} from 'react-native';

import BottomNavigator from './BottomNavigator';
import pallete from './styles/pallete';

const App = () => {
  useEffect(() => {
    import('./services/server').then((server) => {
      server.socket.on('connect', () => {
        SplashScreen.hide();
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
