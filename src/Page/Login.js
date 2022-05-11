import React from 'react';
import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Button from '../Component/Button';
import InputText from '../Component/InputText';
import PasswordInput from '../Component/PassInput';
import PhoneInput from '../Component/PhoneInput';

const Login = () => {
  return (
    <>
      <Text>Login</Text>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{paddingVertical: 10, paddingHorizontal: 15}}>
          <InputText label="Email" placeholder="Enter Email" />
          <InputText label="Email" placeholder="Enter Email" />
          <PasswordInput label="Password" placeholder="Enter Password" />
          <PhoneInput label="Phone Number" placeholder="Enter Phone Number" />
          <View style={{marginVertical: 15}}>
            <Button text="Login" height="7%" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;
