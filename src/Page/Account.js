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

const Account = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#F9DDD7',
          height: hp('25%'),
        }}>
        <View
          style={{
            // backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'row',
            marginVertical: 15,
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: 60,
              width: 60,
              alignSelf: 'center',
              backgroundColor: '#FFF',
              borderRadius: 50,
              borderColor: '#FFF',
              borderWidth: 2,
            }}
            source={require('../assets/images/OTP-bro.png')}
          />
          <Text style={{marginLeft: 15}}>Edit</Text>
        </View>
        <View
          style={{
              marginVertical:20,
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
          icon={<FeatherIcon name="shopping-bag" size={30} />}
          name="My Orders"
        />
        <MenuItem
          icon={<FeatherIcon name="help-circle" size={30} />}
          name="My Credits"
        />
        <MenuItem
          icon={<IonIcon name="wallet-outline" size={30} />}
          name="My Wallet"
        />
        <MenuItem
          icon={<AntIcon name="logout" size={30} />}
          name="Logout"
        />
        <MenuItem
          icon={<FeatherIcon name="help-circle" size={30} />}
          name="Need Help? Reach out to us"
        />
      </View>
    </View>
  );
};

export default Account;
