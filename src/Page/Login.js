/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import baseURL from '../assets/common/baseUrl';
import Button from '../Component/Button';
import PhoneInput from '../Component/PhoneInput';

const Login = props => {
  const [phoneNo, setPhoneNo] = useState('');
  // console.log('af', phoneNo);

  const sendOtp = () => {
    axios({
      method: 'POST',
      url: `${baseURL}sendOtp`,
      data: {phoneNo: '8850885962'},
    })
      .then(res => {
        console.log('res', res.data.message);

        if (res.data.message) {
          props.navigation.navigate('verifyOtp', {phoneNo: '8850885962'});
          // console.log('res');
        }
      })
      .catch(err => console.log('err', err));
  };
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

              <View style={{alignSelf: 'center'}}>
                <PhoneInput
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                  width="80%"
                  maxLength={10}
                  pv={10}
                  mv={10}
                  onChangeText={e => setPhoneNo(e)}
                />
              </View>
            </View>
          </View>

          <View style={{marginVertical: 15}}>
            <Button text="Login" height="7%" width="95%" onclick={sendOtp} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;
