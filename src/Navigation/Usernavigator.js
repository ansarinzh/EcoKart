import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Page/Login';
import Account from '../Page/Account';
import VerifyOTP from '../Page/VerifyOTP';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Orders from '../Page/Orders';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();

function UserStack() {
  const [userrr, setuserrr] = useState('');
  const data = useSelector(state => state.CartReducer.user);
  console.log('data', data);

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(res => {
        if (res) {
          setuserrr(res);
        } else {
          setuserrr(null);
        }

        // console.log('res_token_id', res);
      })
      .catch(err => console.log('err', err));
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {userrr ? (
        <>
          <Stack.Screen
            options={{headerShown: false}}
            name="account"
            component={Account}
          />

          <Stack.Screen
            options={{headerShown: false}}
            name="order"
            component={Orders}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            options={{headerShown: false}}
            name="login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="verifyOtp"
            component={VerifyOTP}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function UserNavigator() {
  return <UserStack />;
}
