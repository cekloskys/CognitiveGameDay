import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Solutions from '../screens/Solutions';
import Games from '../screens/Games';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarIndicatorStyle: {
          backgroundColor: '#000000',
        },
      }}>
      <Tab.Screen name={'Games'} component={Games} />
      <Tab.Screen name={'Solutions'} component={Solutions} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
