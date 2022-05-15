/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../assets/Color';

import Counter from './Counter';

import {useSelector, useDispatch} from 'react-redux';
import {AddToCart, RemoveQtyItem} from '../Redux/Action/CartAction';
import {Fonts} from '../assets/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';

const CheckoutProductItem = ({data}) => {
  console.log('datsssa', data);
  // const totaloncard = Number(data.price * quantity).toFixed(0);
  return (
    <View>
      <View style={styles.productCard}>
        <>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              style={styles.imgCard}
              source={{
                uri: data
                  ? data.image
                  : 'https://images.pexels.com/photos/7288781/pexels-photo-7288781.jpeg',
              }}
            />
            <View>
              <Text style={styles.heading}>{data.name}</Text>

              <View
                style={{
                  // backgroundColor: 'red',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  // marginVertical:9
                }}>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    marginVertical: 2,
                    fontFamily: Fonts.primaryFont,
                  }}>
                  MRP
                  <Text
                    style={{
                      marginHorizontal: 9,
                      fontFamily: Fonts.primaryFont,
                    }}>
                    ₹{data.price}
                  </Text>
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: Fonts.primaryFont,
                  color: Color.secondary,
                }}>
                {data.price} / {data.unit}
              </Text>
            </View>
            {/* <View
              style={{
                // backgroundColor: 'red',
                display: 'flex',
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
                // marginlef: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: Fonts.headingFont,
                  display: 'flex',
                  alignSelf: 'flex-end',
                  backgroundColor: 'red',

                  // color: Color.secondary,
                }}>
                Total: {'totaloncard'}
              </Text>
            </View> */}
          </View>
        </>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    // alignItems: 'center',
    backgroundColor: '#FFF',
    height: hp('12%'),
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 7,
    marginHorizontal: 10,
    elevation: 5,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'space-between',
    zIndex: 999,
  },
  imgCard: {
    marginHorizontal: wp('3%'),
    height: hp('9%'),
    width: wp('16%'),
    borderRadius: 20,
    resizeMode: 'contain',
  },
  heading: {
    display: 'flex',
    // fontSize: 18,
    // marginVertical: 5,
    // backgroundColor: 'red',
    alignSelf: 'flex-start',
    fontFamily: Fonts.subHeadingFont,
  },
});

export default CheckoutProductItem;
