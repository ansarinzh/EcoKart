import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/Navigation/Main';

import Header from './src/Component/Header';

const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
