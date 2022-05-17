import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './Main';
import UserNavigator from './Usernavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useSelector} from 'react-redux';
const UserSwitch = () => {
  const [USer, setUSer] = useState('');
  const userG = useSelector(state => state.CartReducer.user);
  console.log('User', USer);

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(res => {
        if (res) {
          setUSer(res);
        } else {
          setUSer(null);
        }

        console.log('res_token_user', res);
      })
      .catch(err => console.log('err', err));
  }, [userG]);

  return (
    <NavigationContainer>
      {/* <MainNavigator /> */}
      {USer ? <MainNavigator /> : <UserNavigator />}
    </NavigationContainer>
  );
};

export default UserSwitch;
