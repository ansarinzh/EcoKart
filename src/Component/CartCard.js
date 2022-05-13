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
import { useSelector, useDispatch } from 'react-redux'; 
import {AddToCart, RemoveQtyItem} from '../Redux/Action/CartAction';


const CartCard = ({data}) => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.CartReducer);


  let quantity;
  cartItems.carts.map(q => {
    if (q._id === data._id) {
      quantity = q.qty;
    }
  });


  const onIncrement = (data) => {
    dispatch(AddToCart(data));
    // setCount(prevCount => prevCount + 1);
  };

  const onAddToCart = () => {
    // dispatch()
    setShow(true);
  };
  const removeAddToCart = (data) => {
    dispatch(RemoveQtyItem(data));
    // count == 0 ? setShow(false) : null;
    // setCount(prevCount => prevCount - 1);
  };
  return (
    <View>
      <View style={styles.productCard}>
        <>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              style={styles.imgCard}
              source={{
                uri: data.image,
              }}
            />
            <View
              style={
                {
                  // width: wp('56%'),
                  // backgroundColor: 'yellow',
                  // alignSelf: 'flex-start',
                }
              }>
              <Text style={styles.heading}>{data.name}</Text>

              <Text
                style={{textDecorationLine: 'line-through', marginVertical: 2}}>
                MRP {data.price}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  // alignSelf: 'flex-start',
                  color: Color.secondary,

                  // alignSelf: 'flex-start',
                  //   backgroundColor: 'red',
                }}>
                {data.price} / {data.unit}
              </Text>

              {/* <Text style={{ ali}}></Text> */}
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              //   alignItems: 'flex-end',
              // backgroundColor: 'blue',
              // justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Counter
              removeFromCart={()=>removeAddToCart(data)}
              count={quantity}
              addToCart={()=> onIncrement(data)}
            />
          </View>
        </>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: hp('10%'),
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    elevation: 5,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'space-between',
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
    fontSize: 18,
    // marginVertical: 5,
    // backgroundColor: 'red',
    alignSelf: 'flex-start',
  },
});
export default CartCard;
// price  , mrp , unit ,
