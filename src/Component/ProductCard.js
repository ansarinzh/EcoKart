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
    <View>
      <View style={styles.productCard}>
        <>
          <Label discount={50} />

          <Image
            style={styles.imgCard}
            source={{
              uri: data.image,
            }}
          />

          <View
            style={{
              width: wp('56%'),
              // backgroundColor:"yellow"
            }}>
            <Text
              onPress={() => navigation.navigate('Product Detail')}
              style={styles.heading}>
              {data.name}
            </Text>
            <Text>
              {data.description.length > 30
                ? data.description.substring(0, 30 - 3) + '.....'
                : data.description}
            </Text>

            <Text
              style={{textDecorationLine: 'line-through', marginVertical: 5}}>
              `MRP ${data.price}`
            </Text>

            <Text
              style={{
                fontSize: 15,
                alignSelf: 'flex-start',
                color: Color.secondary,

                alignSelf: 'flex-start',
                // backgroundColor: 'red',
              }}>
              {data.price} / {data.unit}
            </Text>

            {/* <Text style={{ ali}}></Text> */}
            <View
              style={{
                display: 'flex',
                // alignItems: 'flex-end',
                // backgroundColor: 'blue',
                alignSelf: 'flex-end',
              }}>
              {show ? (
                <Counter
                  removeFromCart={removeAddToCart}
                  count={count}
                  addToCart={onIncrement}
                />
              ) : (
                <Button height="5%" width="20%" text="Add To Cart" onclick={onAddToCart} />
              )}
            </View>
          </View>
        </>
      </View>
    </View>
  );
};

//react-native-swiper

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#fff',
    height: hp('21%'),
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    elevation: 5,
    paddingVertical: 10,
    borderRadius: 20,
    borderColor:Color.primary,
    borderWidth:0.5
  },
  imgCard: {
    marginHorizontal: wp('3%'),
    width: hp('15%'),
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
// price  , mrp , unit ,
