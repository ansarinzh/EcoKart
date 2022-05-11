import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Color } from '../assets/Color';

const Label = ({discount}) => {
  return (
    <View style={styles.label}>
      <Text style={styles.labelText}>{discount}% OFF</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    width: wp('17%'),
    zIndex: 99,
    color: '#fff',
    backgroundColor: Color.secondary,
    position: 'absolute',
    top: 10,
    left: 11,
    paddingVertical: 8,
    borderTopLeftRadius: 20,
    height: hp('4%'),
    display: 'flex',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 12,
    // color: '#FFF',
    fontWeight: '600',
  },
});

export default Label;
