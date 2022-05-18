import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Page/Login';
import Account from '../Page/Account';

const Stack = createNativeStackNavigator();

function UserStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="account"
        component={Account}
      />
      {/* <Stack.Screen name="verifyotp" component={VerifyOTP} /> */}
    </Stack.Navigator>
  );
}

export default function UserNavigator() {
  return <UserStack />;
}
