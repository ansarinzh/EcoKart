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

const ProductCard = ({data, navigation}) => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const qty = useSelector(state => state.CartReducer);

  // console.log('qty', qty);
  // console.log('data', data);
  // console.log(
  //   '****************',
  //   qty.carts.filter(item => item._id === data._id).length,
  // );
  let quantity;
  qty.carts.map(q => {
    if (q._id === data._id) {
      quantity = q.qty;
    }
  });
  const onIncrement = data => {
    dispatch(AddToCart(data));
  };

  const onAddToCart = data => {
    // console.log('item', data);
    dispatch(AddToCart(data));
    // setShow(true);
  };
  const removeAddToCart = data => {
    dispatch(RemoveQtyItem(data));
    // count == 0 ? setShow(false) : setCount(prevCount => prevCount - 1);
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
            {data.name.length > 15
              ? data.name.substring(0, 15 - 3) + '.....'
              : data.name}
          </Text>
          <Text style={{width: 130}}>
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
              style={{textDecorationLine: 'line-through', marginVertical: 2}}>
              MRP
            </Text>

            <Text style={{marginHorizontal: 9}}>₹{data.price}</Text>
          </View>

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

        {/* {quantity === 0 && (
          <Button
            height="5%"
            width="25%"
            text="Add To Cart"
            onclick={() => onAddToCart(data)}
          />
        )} */}
      </View>
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
    fontSize: 18,
    marginVertical: 5,
    // backgroundColor: 'red',
    alignSelf: 'flex-start',
  },
});
export default ProductCard;
