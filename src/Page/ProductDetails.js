/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {Color} from '../assets/Color';
import Button from '../Component/Button';
import Counter from '../Component/Counter';
import Header from '../Component/Header';
import axios from 'axios';
import baseURL from '../assets/common/baseUrl';
import {AddToCart} from '../Redux/Action/CartAction';

const ProductDetails = props => {
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      axios
        .get(`${baseURL}products/${props?.route?.params?.id ?? ''}`)
        .then(res => {
          setProductDetails(res.data);
          setLoading(false);
        })
        .catch(error => {
          console.log('Api call error', error);
        });

      return () => {
        setProductDetails([]);
      };
    }, []),
  );

  const addToCart = productDetails => {
    dispatch(AddToCart(productDetails));
    props.navigation.navigate('cart');
  };

  // console.log(':::::::::', productDetails);

  return (
    <View
      style={{
        paddingHorizontal: 10,
        // backgroundColor: 'yellow',
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
      }}>
      {loading === false ? (
        <>
          <Header
            navigation={props.navigation}
            // HeaderName="Home"
            screenName="Deatils screen"
            iconName="arrowleft"
            // cartIcon="heart-o"
            // noQty="noQty"
          />
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '800',
                color: Color.primaryText,
                textAlign: 'center',
                padding: 10,
              }}>
              {productDetails.name}
            </Text>
            <View style={{display: 'flex', alignItems: 'center'}}>
              <Image
                style={{
                  height: hp('30%'),
                  width: wp('90%'),
                  borderRadius: 15,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: productDetails
                    ? productDetails.image
                    : 'https://media-cdn.tripadvisor.com/media/photo-s/19/1e/1a/3a/pizza-hut.jpg',
                }}
              />
            </View>
            <View style={{paddingVertical: 10}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  // backgroundColor:"red"
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    color: Color.primaryText,
                    fontSize: 20,
                  }}>
                  {productDetails.name}
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  // justifyContent: 'center',
                  marginVertical: 5,
                  // backgroundColor:"blue"
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    color: Color.primaryText,
                    fontSize: 20,
                  }}>
                  {productDetails.price}
                </Text>
                <Text
                  style={{
                    fontWeight: '600',
                    color: Color.primaryText,
                    fontSize: 20,
                  }}>
                  /{productDetails.unit}
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                }}></View>

              <View style={{marginVertical: 15}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '600',
                    color: Color.primaryText,
                  }}>
                  Details
                </Text>
                <Text style={{fontWeight: '600'}}>
                  {productDetails.richDescription || 'No description here .'}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginVertical: 15,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Button
              text="ADD TO CART"
              width="40%"
              height="7%"
              onclick={() => addToCart(productDetails)}
            />
            <Button
              text="Buy Now"
              width="40%"
              height="7%"
              onclick={() => props.navigation.navigate('checkout')}
            />
          </View>
        </>
      ) : (
        <View
          style={{
            backgroundColor: '#f2f2f2',
            marginTop: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="red" />
        </View>
      )}
    </View>
  );
};

export default ProductDetails;
