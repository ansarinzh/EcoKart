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
  // console.log('qty', qty);
  let quantity;
  qty?.carts?.map(q => {
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
  const Discount = data.mrp - data.price;
  const totalDiscount = Number((Discount / data.mrp) * 100).toFixed(0);
  // console.log('Discount', totalDiscount);
  return (
    <View style={styles.productCard}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        {totalDiscount >= 20 ? <Label discount={totalDiscount} /> : null}

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
          <Text style={{width: wp('35%'), fontFamily: Fonts.primaryFont}}>
            {data.description.length > 15
              ? data.description.substring(0, 15 - 3) + '.....'
              : data.description}
          </Text>
          <View
            style={styles.productMRPPrice}>
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
            style={styles.discountedPrice}>
            {data.price} / {data.unit}
          </Text>
        </View>
      </View>

      {data.countInStock > 0 ? (
        <View
          style={styles.qntyView}>
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
            marginTop: hp('2'),
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
    margin: wp("3%"),
    elevation: 5,
    paddingVertical: hp('1.2%'),
    borderRadius: 20,
    borderColor: Color.primary,
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
    marginVertical: hp('0.5%'),
    alignSelf: 'flex-start',
    fontFamily: Fonts.subHeadingFont,
  },
  qntyView:{
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: wp('4%'),
  },
  productMRPPrice:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPrice:{
    fontSize: hp('2%'),
    alignSelf: 'flex-start',
    color: Color.secondary,
    fontFamily: Fonts.primaryFont,
  }
});
export default ProductCard;
