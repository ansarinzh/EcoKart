import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingVertical: 10,
            height: hp('7%'),
            borderBottomColor: Color.primary,
            borderBottomWidth: 1,
            marginTop: 5,
          }}>
          {icon}
          <Text
            style={{
              alignSelf: 'center',
              marginHorizontal: 20,
              fontFamily: Fonts.btnFont,
            }}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MenuItem;
