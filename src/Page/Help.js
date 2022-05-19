import React from 'react';
import {Text, View} from 'react-native';

const Help = ({}) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text style={{fontSize: 30}}>Service unavailable</Text>
    </View>
  );
};

export default Help;
