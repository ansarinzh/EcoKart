import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../assets/Color';
const Button = ({text, onclick, width, height}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onclick}
        style={[styles.button, {height: hp(height), width: wp(width)}]}>
        <Text style={{color: Color.btnTextColor}}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // backgroundColor: 'red',
    // width: wp(``),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
    borderRadius: 30,
    // paddingVertical: hp('2%'),
  },
});

export default Button;
