import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const PhoneInput = ({label, placeholder, width, maxLength, pv, mv}) => {
  const [text, onChangeText] = React.useState('');
  const [showPass, setShowPass] = React.useState(true);

  return (
    <View style={{paddingVertical: pv}}>
      <Text style={{marginVertical: mv}}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, { width: wp(width) }]}
        onChangeText={onChangeText}
        value={text}
        keyboardType='phone-pad'
        maxLength={maxLength}
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

export default PhoneInput;
