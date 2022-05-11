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
        padding: 10,
        alignItems: 'center',
      }}>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '600',
            fontFamily: 'Rubik-VariableFont_wght',
            // ,
          }}>
          Hey Buddy
        </Text>
        <Text style={{fontFamily: 'Rubik-Italic-VariableFont_wght'}}>
          Hey Buddy
        </Text>
      </View>
      <View>
        <Icon name="shopping-cart" color={Color.primary} size={30} />
      </View>
    </View>
  );
};

export default Header;
