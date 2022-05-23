import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Color} from '../assets/Color';
import {Fonts} from '../assets/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {currentUserSet} from '../Redux/Action/CartAction';

const MenuItem = ({name, icon, onPress, navigation}) => {
  const dispatch = useDispatch();
  const NavigationHandelr = () => {
    console.log('name', name);

    if (name == 'My Orders') {
      navigation.navigate('order');
    } else if (name == 'Logout') {
      AsyncStorage.clear();
      dispatch(currentUserSet('false'));
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={NavigationHandelr}>
        <View
          style={Styles.menuList}>
          {icon}
          <Text
            style={Styles.menuText}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  menuList:{
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: wp('6%'),
    paddingVertical: hp('1.3%'),
    height: hp('7%'),
    borderBottomColor: Color.primary,
    borderBottomWidth: 1,
    marginTop: hp('0.6%'),
  },
  menuText:{
    alignSelf: 'center',
    marginHorizontal: hp('2.4%'),
    fontFamily: Fonts.btnFont,
  }
})
export default MenuItem;
