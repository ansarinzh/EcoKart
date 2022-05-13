import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TextInput,
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

const VerifyOTP = props => {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');

  const otp1Ref = useRef('');
  const otp2Ref = useRef('');
  const otp3Ref = useRef('');
  const otp4Ref = useRef('');

  const setTokenAfterLogin = () => {
    console.log('ugik');
    AsyncStorage.setItem('token', 'token');
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              source={require('../assets/images/OTP-bro.png')}
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
                Enter the OTP sent to
                <Text style={{fontWeight: '800', fontSize: 15}}>
                  +91-9963258741
                </Text>
              </Text>
            </View>

            <View style={{marginHorizontal: 30}}>
              <Text>Enter OTP</Text>
              <View
                style={{
                  marginVertical: 10,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={{
                    width: wp('15%'),
                    borderColor: Color.primary,
                    borderWidth: 1,
                    borderRadius: 10,
                    textAlign: 'center',
                  }}
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
                  style={{
                    width: wp('15%'),
                    borderRadius: 10,
                    borderColor: Color.primary,
                    borderWidth: 1,
                    textAlign: 'center',
                  }}
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
                  style={{
                    width: wp('15%'),
                    borderColor: Color.primary,
                    borderWidth: 1,
                    borderRadius: 10,
                    textAlign: 'center',
                  }}
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
                  style={{
                    width: wp('15%'),
                    borderColor: Color.primary,
                    borderWidth: 1,
                    borderRadius: 10,
                    textAlign: 'center',
                  }}
                  ref={otp4Ref}
                  keyboardType="number-pad"
                  maxLength={1}
                  onChangeText={otp4 => setOtp4(otp4)}
                />
              </View>
            </View>
          </View>

          <View style={{marginVertical: 15, alignSelf: 'center'}}>
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

export default VerifyOTP;
