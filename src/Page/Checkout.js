/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Color} from '../assets/Color';
import {Fonts} from '../assets/Fonts';
import Button from '../Component/Button';
import CheckoutProductItem from '../Component/CheckoutProductItem';
import {useSelector, useDispatch} from 'react-redux';
import {ClearCart} from '../Redux/Action/CartAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import baseUrl from '../assets/common/baseUrl';
import axios from 'axios';

const Checkout = props => {
  const dispatch = useDispatch();
  const [tokenId, setTokenId] = useState('');
  // console.log('prtos', props?.route?.params?.billing);
  const orderItems = useSelector(state => state.CartReducer.carts);
  console.log('orderitems', orderItems);

  const total =
    orderItems.length > 0 &&
    orderItems.map(q => q.qty * q.price).reduce((a, b) => a + b, 0);
  // console.log('total', total);

  const confirmOrder = () => {
    // console.log('hjjh');
    const order = {
      orderItems,
      billing: props?.route?.params,
      tokenId: tokenId,
    };

    axios
      .post(`${baseUrl}orders`, order)
      .then(res => {
        console.log('res', res);
        if (res.status == 200 || res.status == 201) {
          setTimeout(() => {
            dispatch(ClearCart());
            props.navigation.navigate('Home');
          }, 500);
        }
      })
      .catch(error => {
        console.log('err', error);
      });
  };

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(res => {
        if (res) {
          setTokenId(res);
        } else {
          setTokenId(null);
        }

        // console.log('res_token_id', res);
      })
      .catch(err => console.log('err', err));
  }, []);

  console.log('tokenId', tokenId);
  return (
    <View
      style={{
        padding: 15,
        //  backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'space-between',
        flex: 1,
      }}>
      <View style={{height: 375}}>
        <View style={{marginVertical: 10}}>
          <Text style={{marginVertical: 5}}>Order items</Text>

          <FlatList
            data={orderItems}
            showsVerticalScrollIndicator={false}
            renderItem={data => <CheckoutProductItem data={data.item} />}
          />
        </View>
      </View>
      <View style={{}}>
        <View style={{marginVertical: 12}}>
          <Text style={{marginVertical: 10}}>Shipping To</Text>
          <View
            style={{
              padding: 10,
              borderColor: Color.primary,
              borderWidth: 1,
              borderRadius: 20,
            }}>
            <Text style={{fontFamily: Fonts.headingFont}}>
              Address:{''}
              {props?.route?.params?.billing?.name ?? 'no name'}
            </Text>

            <Text>
              {props?.route?.params?.billing?.flat ?? 'no name'} ,
              {props?.route?.params?.billing?.landmark ?? 'no name'} ,
              {props?.route?.params?.billing?.pincode ?? 'no name'} ,
            </Text>
            <Text>
              {' '}
              Mobile: {props?.route?.params?.billing?.mobileNo ?? 'no name'} ,
            </Text>
          </View>
        </View>
        <Text style={{marginVertical: 5}}>Paymet method</Text>
        <View
          style={{
            marginVertical: 5,
            // backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              padding: 10,
              borderColor: Color.primary,
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: 'flex-start',
              marginBottom: 10,
            }}>
            <Text style={{fontFamily: Fonts.headingFont}}>
              Cash on delivery
            </Text>
          </View>
          <View
            style={{
              padding: 10,
              borderColor: Color.primary,
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: 'flex-start',
              marginBottom: 10,
            }}>
            <Text style={{fontFamily: Fonts.headingFont}}>
              Total Amount: {Number(total).toFixed(0)}
            </Text>
          </View>
        </View>
        <Button text="Done" width="93%" height="7%" onclick={confirmOrder} />
      </View>
    </View>
  );
};

export default Checkout;
