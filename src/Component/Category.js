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
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Color.primary,
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 40,
        alignSelf: 'flex-start',
        marginHorizontal:5
      }}>
      <Image
        style={{
          height: hp('6%'),
          width: wp('12%'),
          borderRadius: 50,
          margin: 5,
        }}
        source={{
          uri: 'https://picsum.photos/id/237/536/354',
        }}
      />
      <Text style={{fontSize: 15, marginHorizontal: 5}}>Category</Text>

      {/* <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: Color.primary,
          borderWidth: 1,
          //   paddingVertical: 5
          margin: 5,
          borderRadius: 50,
        }}>
        <Image
          style={{
            height: hp('8%'),
            width: wp('15%'),
            borderRadius: 50,
            margin: 5,
          }}
          source={{
            uri: 'https://picsum.photos/id/237/536/354',
          }}
        />
        <Text style={{fontSize: 15, marginHorizontal: 5}}>Category</Text>
      </View> */}
    </View>
  );
};

export default Category;
