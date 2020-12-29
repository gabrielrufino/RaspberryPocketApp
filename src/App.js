import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, StatusBar} from 'react-native';

import BottomNavigator from './BottomNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text>Raspberry Pocket</Text>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
