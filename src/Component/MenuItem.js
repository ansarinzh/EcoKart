import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Color} from '../assets/Color';
import {Fonts} from '../assets/Fonts';

const MenuItem = ({name, icon, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingVertical: 10,
            height: hp('7%'),
            borderBottomColor: Color.primary,
            borderBottomWidth: 1,
            marginTop: 5,
          }}>
          {icon}
          <Text
            style={{
              alignSelf: 'center',
              marginHorizontal: 20,
              fontFamily: Fonts.btnFont,
            }}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MenuItem;
