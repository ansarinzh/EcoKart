import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductContainer from '../Page/Home';
import SingleProduct from '../Page/ProductDetails';
import CartNavigator from './Cartnavigator';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        // options={}
        options={{headerShown: false}}
        name="Home"
        component={ProductContainer}
      />
      <Stack.Screen name="Product Detail" component={SingleProduct} />
      <Stack.Screen name="cart" component={CartNavigator} />
    </Stack.Navigator>
  );
}

export default function HomeNavigator() {
  return <MyStack />;
}
