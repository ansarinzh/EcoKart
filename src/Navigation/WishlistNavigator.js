import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Wishlist from '../Page/Wishlist';

const Stack = createNativeStackNavigator();

function Wishlistt() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Cart"
        component={Wishlist}
      />
    </Stack.Navigator>
  );
}

export default function CartNavigator() {
  return <Wishlistt />;
}
