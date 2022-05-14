import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Color} from '../assets/Color';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fonts } from '../assets/Fonts';

const Counter = ({removeFromCart, count, addToCart}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={removeFromCart}>
        <Icon
          style={{
            alignContent: 'center',
            color: Color.btnTextColor,
          }}
          name="minus"
          size={10}
        />
      </TouchableOpacity>
      <View style={styles.countContainer}>
        <Text style={{fontFamily: Fonts.subHeadingFont}}>{count}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={addToCart}>
          <Icon
          style={{
            alignContent: 'center',
            color: Color.btnTextColor,
          }}
          name="plus"
          size={10}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderColor: Color.primary,
    // borderWidth: 1,
    // borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: Color.primary,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  btnText: {
    color: Color.btnTextColor,
    fontSize: 15,
    fontWeight: '600',
  },
});
export default Counter;
