import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import { Fonts } from '../assets/Fonts';

const InputText = ({label, placeholder, keyBoarType, value, onChangeText}) => {
  // const [text, onChangeText] = React.useState('');
  return (
    <View style={{paddingVertical: 10,}}>
      <Text style={{marginVertical: 10, fontFamily: Fonts.primaryFont, fontWeight:"700"}}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyBoarType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20
  },
});

export default InputText;
