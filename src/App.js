import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Text>Raspberry Pocket</Text>
      </NavigationContainer>
    </>
  );
};

export default App;
