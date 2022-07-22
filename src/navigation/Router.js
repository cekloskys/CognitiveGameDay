import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SignInScreen from '../screens/SignIn';
import TabNavigator from './TabNavigator';
import DeleteGamesScreen from '../screens/DeleteGames';
import AdminScreen from '../screens/Admin';
import CreateGameScreen from '../screens/CreateGame';
import UpdateGamesScreen from '../screens/UpdateGame';
import UpdateScreen from '../screens/Update';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={'Play'} component={TabNavigator} />
        <Stack.Screen name={'Sign In'} component={SignInScreen} />
        <Stack.Screen name={'Admin'} component={AdminScreen} options={{
            headerShown: false,
            gestureEnabled: false,
        }} />
        <Stack.Screen name={'Create Game'} component={CreateGameScreen} />
        <Stack.Screen name={'Delete Game'} component={DeleteGamesScreen} />
        <Stack.Screen name={'Update Game'} component={UpdateGamesScreen} />
        <Stack.Screen name={'Update'} component={UpdateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
