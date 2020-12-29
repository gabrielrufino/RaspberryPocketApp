import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Commands, Status} from './screens';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Status} />
      <Tab.Screen name="Commands" component={Commands} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
