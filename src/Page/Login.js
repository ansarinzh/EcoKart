/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  StyleSheet,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
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
          style={Styles.loginView}>
          <View>
            <Image
              style={Styles.loginImg}
              source={require('../assets/images/login-amico.png')}
            />

            <View style={{marginVertical: hp('2%')}}>
              <Text
                style={Styles.textStyle}>
                OTP Verification
              </Text>
              <Text
                style={Styles.secondaryText}>
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


const Styles = StyleSheet.create({
  loginView:{
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('3%'),
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  loginImg:{
    height: hp('32%'),
    width: wp('65%'),
    alignSelf: 'center',
  },
  textStyle:{
    alignSelf: 'center',
    fontSize: hp('2.5%'),
    fontWeight: '600',
    marginVertical: hp('0.5%'),
  },
  secondaryText:{
    alignSelf: 'center',
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: hp("0.5%"),
  }
})
export default Login;
