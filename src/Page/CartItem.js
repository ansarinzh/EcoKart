import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Button from '../Component/Button';
import CartCard from '../Component/CartCard';
import Header from '../Component/Header';
import {useSelector, useDispatch} from 'react-redux';
import {RemoveFromCart} from '../Redux/Action/CartAction';
import {Fonts} from '../assets/Fonts';
import { Color } from '../assets/Color';

const CartItem = props => {
  const cartItem = useSelector(state => state.CartReducer.carts);
  const total = cartItem.map(q => q.qty * q.price).reduce((a, b) => a + b, 0);
  return (
    <>
      {cartItem.length > 0 ? (
        <>
          <View
            style={{
              // backgroundColor: 'green',
              height: 530,
            }}>
            <Header
              navigation={props.navigation}
              screenName="Cart"
              iconName="arrowleft"
              // noQty="noQty"
              // cartIcon="shopping-cart"
            />
            <FlatList
              data={cartItem}
              renderItem={data => <CartCard data={data.item} />}
            />
          </View>
          <View style={styles.coreView}>
            <View style={styles.card}>
              <Text style={{fontFamily: Fonts.subHeadingFont}}>Subtotal</Text>
              <Text style={{fontFamily: Fonts.headingFont}}>
                {Number(total).toFixed(0)}
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={{fontFamily: Fonts.subHeadingFont}}>Delivey</Text>
              <Text style={{fontFamily: Fonts.headingFont}}>Free</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                // borderBottomColor: 'red',
                // borderBottomWidth: 0.5,
                paddingVertical: 15,
              }}>
              <Text style={{fontFamily: Fonts.subHeadingFont}}>Total</Text>
              <Text style={{fontFamily: Fonts.headingFont, fontSize: 16}}>
                {Number(total).toFixed(0)}
              </Text>
            </View>
            <View
              style={{
                paddingVertical: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                text="Checkout"
                width="90%"
                height="6%"
                onclick={() => props.navigation.navigate('billing')}
              />
            </View>
          </View>
        </>
      ) : (
        <View
          style={{
            padding: 10,
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginVertical: 250,
              fontFamily: Fonts.headingFont,
            }}>
            No items in the Cart
          </Text>
          <Button
            text="Go to Home"
            width="95%"
            height="7%"
            onclick={() => props.navigation.navigate('Home')}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  coreView: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    height: 250,
    width: '100%',
    padding: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    elevation: 20,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Color.primary,
    borderBottomWidth: 0.5,
    paddingVertical: 15,
  },
});
export default CartItem;
