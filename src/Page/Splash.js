import React from 'react';
import {View, Text, Image} from 'react-native';
import {Color} from '../assets/Color';
const Splash = () => {
  return (
    <View
      style={{
        backgroundColor: Color.primary,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{height: 300, width: 300}}
        source={require('../assets/images/splash-screenECOkart.png')}
      />
    </View>
  );
};

export default Splash;
