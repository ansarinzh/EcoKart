import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Page/Login';
import VerifyOTP from '../Page/VerifyOTP';

const Stack = createNativeStackNavigator();

function UserStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="login"
        component={Login}
      />
      <Stack.Screen name="verifyotp" component={VerifyOTP} />
    </Stack.Navigator>
  );
}

export default function UserNavigator() {
  return <UserStack />;
}
