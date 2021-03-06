import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Button from '../Component/Button';
import CartCard from '../Component/CartCard';
import Header from '../Component/Header';

import {useSelector, useDispatch} from 'react-redux';

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
              <Text>Subtotal</Text>
              <Text>{Number(total).toFixed(0)}</Text>
            </View>
            <View style={styles.card}>
              <Text>Delivey</Text>
              <Text>Free</Text>
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
              <Text>Total</Text>
              <Text>{Number(total).toFixed(0)}</Text>
            </View>
            <View
              style={{
                paddingVertical: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button text="Checkout" width="90%" height="6%" />
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
    borderBottomColor: 'red',
    borderBottomWidth: 0.5,
    paddingVertical: 15,
  },
});
export default CartItem;
