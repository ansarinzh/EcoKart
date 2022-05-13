import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/Navigation/Main';
import UserNavigator from './src/Navigation/Usernavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './src/Component/Header';
import Login from './src/Page/Login';

const App = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        console.log('token', token);
        if (token) setUser(true);
      } catch (error) {
        console.log('err', error);
        setUser(false);
      }
    })();
  }, [user]);
  return (
    <NavigationContainer>
      {/* <Header /> */}
      {user ? (
        <>
          {/* <Header /> */}
          <MainNavigator />
        </>
      ) : (
        <UserNavigator />
      )}
      {/* <UserNavigator /> */}
      {/* <MainNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
