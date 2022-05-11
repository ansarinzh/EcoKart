import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

const InputText = ({label, placeholder}) => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={{paddingVertical: 10,}}>
      <Text style={{marginVertical: 10}}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
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
