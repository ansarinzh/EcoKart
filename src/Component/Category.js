import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Color} from '../assets/Color';

const Category = () => {
  return (
    //   <></>
    <View
      style={{
        display: 'flex',
        backgroundColor: Color.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Color.primary,
        // borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 40,
        alignSelf: 'flex-start',
        marginHorizontal: 5,
        paddingHorizontal: 3,
        paddingVertical:3,
      }}>
      <Image
        style={{
          height: hp('5%'),
          width: wp('10%'),
          borderRadius: 50,
          // margin: 5,
        }}
        resizeMode="contain"
        source={{
          uri: 'https://picsum.photos/id/237/536/354',
        }}
      />
      <Text style={{marginHorizontal: 4, color: Color.primaryText}}>Category</Text>
    </View>
  );
};

export default Category;
