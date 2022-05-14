import React from 'react';

import {TextInput, View, Text} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconcross from 'react-native-vector-icons/Entypo';
import {Fonts} from '../assets/Fonts';
const SearchProduct = ({onFocus, onChangeText, focus, closeList}) => {
  return (
    <>
      <View
        style={{
          backgroundColor: 'gray',
          flexDirection: 'row',
          borderRadius: 15,
          paddingVertical: hp('.3%'),
          width: '92%',
          margin: hp('1.5%'),
        }}>
        <Icon
          name="ios-search"
          size={20}
          color="#000"
          style={{alignSelf: 'center', marginLeft: hp('2%')}}
        />
        <TextInput
          placeholder="Type here..."
          placeholderTextColor="black"
          style={{
            fontSize: 15,
            padding: hp('1.3%'),
            width: '80%',
            fontFamily: Fonts.primaryFont,
          }}
          onFocus={onFocus}
          onChangeText={onChangeText}
        />
        {focus ? (
          <View style={{display: 'flex', justifyContent: 'center'}}>
            <Iconcross
              name="cross"
              size={20}
              color="#000"
              onPress={closeList}
              style={{alignSelf: 'center', marginRight: hp('5%')}}
            />
          </View>
        ) : (
          <View style={{display: 'flex', justifyContent: 'center'}}>
            <Icon
              name="filter"
              size={20}
              color="#000"
              style={{alignSelf: 'center', marginRight: hp('5%')}}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default SearchProduct;
