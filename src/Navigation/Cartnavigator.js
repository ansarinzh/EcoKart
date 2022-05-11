import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CartItem from '../Page/CartItem';

const Stack = createNativeStackNavigator();

function CartStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Cart"
        component={CartItem}
      />
      {/* <Stack.Screen name="Product Detail" component={} /> */}
    </Stack.Navigator>
  );
}

export default function CartNavigator() {
  return <CartStack />;
}
