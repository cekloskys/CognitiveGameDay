/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';
import {LogBox} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/navigation/Router';
import {client} from './apollo';
import {ApolloProvider} from '@apollo/client';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 0.0,
  };

  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

LogBox.ignoreLogs(['Reanimated 2']);
LogBox.ignoreLogs(['onAnimatedValueUpdate']);
LogBox.ignoreLogs(['Warning: ']);
export default App;
