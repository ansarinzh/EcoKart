/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../assets/Color';
import Button from './Button';
import Counter from './Counter';
import Label from './Label';
import {useSelector, useDispatch} from 'react-redux';
import {AddToCart, RemoveQtyItem} from '../Redux/Action/CartAction';
import {Fonts} from '../assets/Fonts';

const ProductCard = ({data, navigation}) => {
  const dispatch = useDispatch();
  const qty = useSelector(state => state.CartReducer);
  let quantity;
  qty.carts.map(q => {
    if (q.id === data.id) {
      quantity = q.qty;
    }
  });
  const onIncrement = data => {
    dispatch(AddToCart(data));
  };

  const onAddToCart = data => {
    dispatch(AddToCart(data));
  };
  const removeAddToCart = data => {
    dispatch(RemoveQtyItem(data));
  };

  // console.log('data', data);
  return (
    <View style={styles.productCard}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Label discount={50} />
        <Image
          style={styles.imgCard}
          source={{
            uri: data
              ? data.image
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
          }}
        />

        <View style={{}}>
          <Text
            onPress={() => navigation.navigate('Product Detail', {id: data.id})}
            style={styles.heading}>
            {data.name.length > 15
              ? data.name.substring(0, 15 - 3) + '.....'
              : data.name}
          </Text>
          <Text style={{width: 130, fontFamily: Fonts.primaryFont}}>
            {data.description.length > 15
              ? data.description.substring(0, 15 - 3) + '.....'
              : data.description}
          </Text>
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
            </Text>

            <Text style={{marginHorizontal: 9}}>₹{data.mrp || 'MRP'}</Text>
          </View>

          <Text
            style={{
              fontSize: 15,
              alignSelf: 'flex-start',
              color: Color.secondary,
              fontFamily: Fonts.primaryFont,
            }}>
            {data.price} / {data.unit}
          </Text>
        </View>
      </View>

      {data.countInStock > 0 ? (
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: 15,
          }}>
          {quantity >= 1 ? (
            // qty.carts.filter(item => item._id === data._id).length >= 1
            <Counter
              removeFromCart={() => removeAddToCart(data)}
              count={quantity}
              addToCart={() => onIncrement(data)}
            />
          ) : (
            <Button
              height="5%"
              width="25%"
              text="Add To Cart"
              onclick={() => onAddToCart(data)}
            />
          )}
        </View>
      ) : (
        <Text
          style={{
            marginTop: 20,
            color: 'red',
            width: 100,
          }}>
          Currently Unavailable
        </Text>
      )}
    </View>
  );
};

//react-native-swiper

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#fff',
    height: hp('16%'),
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    elevation: 5,
    paddingVertical: 10,
    borderRadius: 20,
    borderColor: Color.primary,
    // borderWidth: 0.5,
    justifyContent: 'space-between',
  },
  imgCard: {
    marginHorizontal: wp('2%'),
    width: wp('20%'),
    height: hp('13%'),
    borderRadius: 20,
    resizeMode: 'contain',
  },
  heading: {
    display: 'flex',
    // fontSize: 18,
    marginVertical: 5,
    // backgroundColor: 'red',
    alignSelf: 'flex-start',
    fontFamily: Fonts.subHeadingFont,
  },
});
export default ProductCard;
