import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../assets/Color';
import Button from '../Component/Button';
import InputText from '../Component/InputText';
import PasswordInput from '../Component/PassInput';
import PhoneInput from '../Component/PhoneInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import baseURL from '../assets/common/baseUrl';

import {useDispatch, useSelector} from 'react-redux';
import {currentUserSet} from '../Redux/Action/CartAction';

const VerifyOTP = props => {
  const dispatch = useDispatch();
  const CartLength = useSelector(state => state.CartReducer);
  console.log('ddd', CartLength);
  // console.log('propds', props?.route?.params?.phoneNo);
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');

  const otp1Ref = useRef('');
  const otp2Ref = useRef('');
  const otp3Ref = useRef('');
  const otp4Ref = useRef('');

  const setTokenAfterLogin = () => {
    axios({
      method: 'POST',
      url: `${baseURL}verifyOtp`,
      data: {phoneNo: props?.route?.params?.phoneNo, otp: 123456},
    })
      .then(async res => {
        await AsyncStorage.setItem('token', res?.data?.data?._id);
        dispatch(currentUserSet('user'));
      })
      .catch(err => console.log('err', err));
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={Style.cardView}>
          <View>
            <Image
              style={Style.imgCard}
              source={require('../assets/images/OTP-bro.png')}
            />

            <View style={{marginVertical: 20}}>
              <Text
                style={Style.textStyle}>
                OTP Verification
              </Text>
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginVertical: 5,
                }}>
                Enter the OTP sent to
                <Text style={{fontWeight: '800', fontSize: hp('2%')}}>
                  +91-{props?.route?.params?.phoneNo}
                </Text>
              </Text>
            </View>

            <View style={{marginHorizontal: hp('3.5%')}}>
              <Text>Enter OTP </Text>
              <View
                style={Style.otpInputView}>
                <TextInput
                  style={Style.otpTextInput}
                  ref={otp1Ref}
                  keyboardType="number-pad"
                  maxLength={1}
                  onChangeText={otp1 => {
                    setOtp1(otp1);
                    if (otp1 != '') {
                      otp2Ref.current.focus();
                    }
                  }}
                />
                <TextInput
                  style={Style.otpTextInput}
                  ref={otp2Ref}
                  keyboardType="number-pad"
                  maxLength={1}
                  onChangeText={otp2 => {
                    setOtp2(otp2);
                    if (otp2 != '') {
                      otp3Ref.current.focus();
                    }
                  }}
                />
                <TextInput
                  style={Style.otpTextInput}
                  ref={otp3Ref}
                  keyboardType="number-pad"
                  maxLength={1}
                  onChangeText={otp3 => {
                    setOtp3(otp3);
                    if (otp3 != '') {
                      otp4Ref.current.focus();
                    }
                  }}
                />
                <TextInput
                  style={Style.otpTextInput}
                  ref={otp4Ref}
                  keyboardType="number-pad"
                  maxLength={1}
                  onChangeText={otp4 => setOtp4(otp4)}
                />
              </View>
            </View>
          </View>

          <View style={{marginVertical: hp('1.2%'), alignSelf: 'center'}}>
            <Button
              text="Verify OTP"
              height="7%"
              width="80%"
              onclick={setTokenAfterLogin}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const Style = StyleSheet.create({
  cardView:{
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('3%'),
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  imgCard:{
    height: hp('32%'),
    width: wp('65%'),
    alignSelf: 'center',
  },
  textStyle:{
    alignSelf: 'center',
    fontSize: hp('2.5%'),
    fontWeight: '600',
    marginVertical: hp('0.8%'),
  },
  otpInputView:{
    marginVertical: hp('1.2%'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpTextInput:{
    width: wp('15%'),
    borderColor: Color.primary,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
  }
})
export default VerifyOTP;
