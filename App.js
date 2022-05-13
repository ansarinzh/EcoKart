import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/Navigation/Main';
import UserNavigator from './src/Navigation/Usernavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './src/Component/Header';
import Login from './src/Page/Login';
import {Provider} from 'react-redux';

import store from './src/Redux/store';

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
    <Provider store={store}>
      <NavigationContainer>
        {user ? (
          <>
            <MainNavigator />
          </>
        ) : (
          <UserNavigator />
        )}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
