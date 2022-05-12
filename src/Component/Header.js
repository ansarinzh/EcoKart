import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Color} from '../assets/Color';

const Header = () => {
  return (
    <View
      style={{
        // backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
      }}>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',

            // ,
          }}>
          Hey Buddy
        </Text>
        <Text style={{marginVertical: 4}}>Welcome to my app</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: Color.secondary,
          borderRadius: 50,
          height: 18,
          width: 18,
          alignItems: 'center',
          right: 12,
          top: 20,
          zIndex: 1,
        }}>
        <Text>2</Text>
      </View>
      <View style={{marginHorizontal: 10}}>
        <Icon name="shopping-cart" color={Color.primary} size={30} />
      </View>
    </View>
  );
};

export default Header;
