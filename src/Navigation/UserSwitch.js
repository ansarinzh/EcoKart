import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './Main';
import UserNavigator from './Usernavigator';

import {useSelector} from 'react-redux';
const UserSwitch = () => {
  const userG = useSelector(state => state.CartReducer.user);

  return (
    <NavigationContainer>
      <MainNavigator />
      {/* {userG ? <MainNavigator /> : <UserNavigator />} */}
    </NavigationContainer>
  );
};

export default UserSwitch;
