import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BottomNavigatorIcon from './components/BottomNavigatorIcon';
import {Workflows, Status} from './screens';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: '#e91e63'}}>
      <Tab.Screen
        name="Status"
        component={Status}
        options={{
          tabBarLabel: 'Raspberry Status',
          tabBarIcon: ({color, size}) => (
            <BottomNavigatorIcon
              name="raspberry-pi"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Workflows"
        component={Workflows}
        options={{
          tabBarIcon: ({color, size}) => (
            <BottomNavigatorIcon name="terminal" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={() => <></>}
        options={{
          tabBarIcon: ({color, size}) => (
            <BottomNavigatorIcon name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
