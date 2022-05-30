import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HowToScreen from '../screens/HowTo';
import LinksScreen from '../screens/Links';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'Tutorials'} component={HowToScreen} />
      <Tab.Screen name={'Links'} component={LinksScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
