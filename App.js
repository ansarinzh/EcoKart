import React from 'react';
import CartItem from './src/Page/CartItem';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/Navigation/Main';

import Home from './src/Page/Home';
import Login from './src/Page/Login';
import ProductDetails from './src/Page/ProductDetails';
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
//font ka code nikal de pura
// kaise nikale delete kar de na saab

// android k under se nahi 