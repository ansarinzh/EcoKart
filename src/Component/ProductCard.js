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

const ProductCard = ({data, navigation}) => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const onAddToCart = () => {
    setShow(true);
  };
  const removeAddToCart = () => {
    count == 0 ? setShow(false) : null;
    setCount(prevCount => prevCount - 1);
  };
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
            uri: data.image,
          }}
        />

        <View style={{}}>
          <Text
            onPress={() => navigation.navigate('Product Detail')}
            style={styles.heading}>
            {data.name}
          </Text>
          <Text style={{width: 130}}>
            {data.description.length > 15
              ? data.description.substring(0, 15 - 3) + '.....'
              : data.description}
          </Text>

          <Text style={{textDecorationLine: 'line-through', marginVertical: 5}}>
            `MRP ${data.price}`
          </Text>

          <Text
            style={{
              fontSize: 15,
              alignSelf: 'flex-start',
              color: Color.secondary,
            }}>
            {data.price} / {data.unit}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: 20,
        }}>
        {show ? (
          <Counter
            removeFromCart={removeAddToCart}
            count={count}
            addToCart={onIncrement}
          />
        ) : (
          <Button
            height="5%"
            width="25%"
            text="Add To Cart"
            onclick={onAddToCart}
          />
        )}
      </View>
    </View>
  );
};

//react-native-swiper

const styles = StyleSheet.create({
  productCard: {
    // backgroundColor: 'red',
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
    marginHorizontal: wp('3%'),
    width: wp('20%'),
    height: hp('13%'),
    borderRadius: 20,
    resizeMode: 'contain',
  },
  heading: {
    display: 'flex',
    fontSize: 18,
    marginVertical: 5,
    // backgroundColor: 'red',
    alignSelf: 'flex-start',
  },
});
export default ProductCard;
