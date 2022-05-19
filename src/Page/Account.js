/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Color} from '../assets/Color';
import {Fonts} from '../assets/Fonts';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';

import MenuItem from '../Component/MenuItem';
import Header from '../Component/Header';

const Account = props => {
  return (
    <View
      style={{
        // backgroundColor: 'red',
        display: 'flex',
        // justifyContent: 'space-between',
        flex: 1,
        marginBottom: 40,
      }}>
      <Header
        name="Hey Buddy"
        description="Welcome to my app"
        navigation={props.navigation}
        // HeaderName="Home"
        screenName="account"
        iconName="arrowleft"
        // cartIcon="shopping-cart"
        // noQty="noQty"
      />
      <View
        style={{
          backgroundColor: '#F9DDD7',
          height: hp('35%'),
          // flex:2 ,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            // backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'row',
            // marginVertical: 85,
            justifyContent: 'center',
            marginTop: 60,
          }}>
          <Image
            style={{
              height: 80,
              width: 80,
              alignSelf: 'center',
              backgroundColor: '#FFF',
              borderRadius: 20,
              borderColor: '#FFF',
              borderWidth: 2,
            }}
            resizeMode="contain"
            source={require('../assets/images/OTP-bro.png')}
          />
          <FeatherIcon
            style={{position: 'absolute', top: 0, right: 30}}
            size={20}
            name="camera"
          />
        </View>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 19,
            fontWeight: '800',
            marginTop: 10,
          }}>
          faizan khan
        </Text>
        <View
          style={{
            marginVertical: 20,
            backgroundColor: '#FFF',
            width: wp('90%'),
            alignSelf: 'center',
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 15,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <Text>Wing-B, AG Nagar, MIDC, Kashimira, Mira....</Text>
          <TouchableOpacity
            // onPress={onclick}
            style={{
              backgroundColor: 'transparent',
              borderRadius: 30,
            }}>
            <Text
              style={{
                color: '#000',
                fontFamily: Fonts.btnFont,
              }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <MenuItem
          navigation={props.navigation}
          icon={<FeatherIcon name="shopping-bag" size={30} />}
          name="My Orders"
        />
        <MenuItem
          navigation
          icon={<FeatherIcon name="help-circle" size={30} />}
          name="My Credits"
        />
        <MenuItem
          icon={<IonIcon name="wallet-outline" size={30} />}
          name="My Wallet"
        />
        <MenuItem icon={<AntIcon name="logout" size={30} />} name="Logout" />
        <MenuItem
          icon={<FeatherIcon name="help-circle" size={30} />}
          name="Need Help? Reach out to us"
        />
      </View>
    </View>
  );
};

export default Account;
