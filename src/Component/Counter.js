import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Color} from '../assets/Color';

const Counter = ({removeFromCart, count, addToCart}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={removeFromCart}>
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>
      <View style={styles.countContainer}>
        <Text>{count}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={addToCart}>
        <Text style={styles.btnText}>+</Text>
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
  },
  button: {
    alignItems: 'center',
    backgroundColor: Color.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
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
