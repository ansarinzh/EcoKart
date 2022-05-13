import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import Button from '../Component/Button';
import PhoneInput from '../Component/PhoneInput';

const Login = props => {
  return (
    <>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={{backgroundColor: 'red'}}>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            // backgroundColor: 'yellow',
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <View>
            <Image
              style={{
                height: 250,
                width: 250,
                alignSelf: 'center',
              }}
              source={require('../assets/images/login-amico.png')}
            />

            <View style={{marginVertical: 20}}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 20,
                  fontWeight: '600',
                  marginVertical: 5,
                }}>
                OTP Verification
              </Text>
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginVertical: 5,
                }}>
                We will send you ONE TIME PASSWORD to validate the phone number.
              </Text>
              <PhoneInput
                label="Phone Number"
                placeholder="Enter Phone Number"
                width="95%"
                maxLength={10}
                pv={10}
                mv={10}
              />
            </View>
          </View>

          <View style={{marginVertical: 15}}>
            <Button
              text="Login"
              height="7%"
              width="95%"
              onclick={() => props.navigation.navigate('verifyotp')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;
