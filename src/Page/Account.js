/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
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
      style={Styles.accountView}>
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
        style={Styles.bannerView}>
        <View
          style={Styles.accountImgRow}>
          <Image
            style={Styles.accountImage}
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
          style={Styles.accountName}>
          faizan khan
        </Text>
        <View
          style={Styles.accountAddress}>
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

const Styles = StyleSheet.create({
  accountView:{
    display: 'flex',
    flex: 1,
    marginBottom: hp('5%'),
  },
  bannerView:{
    backgroundColor: '#F9DDD7',
    height: hp('35%'),
    justifyContent: 'space-between',
  },
  accountImgRow:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('7%'),
  },
  accountImage:{
    height: hp('10%'),
    width: wp('20%'),
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: '#FFF',
    borderWidth: 2,
  },
  accountName:{
    alignSelf: 'center',
    fontSize: hp('2.5%'),
    fontWeight: '800',
    marginTop: hp('1.5%'),
  },
  accountAddress:{
    marginVertical: hp('2.5%'),
    backgroundColor: '#FFF',
    width: wp('90%'),
    alignSelf: 'center',
    borderRadius: 5,
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('2%'),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})
export default Account;
