import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Button from '../Component/Button';
import CartCard from '../Component/CartCard';
import Header from '../Component/Header';
import cart from '../products.json';

const CartItem = props => {
  return (
    <>
      <View
        style={{
          //   backgroundColor: 'green',
          height: 530,
        }}>
        <Header navigation={props.navigation} />
        <FlatList
          data={cart}
          renderItem={data => <CartCard data={data.item} />}
        />
      </View>
      <View style={styles.coreView}>
        <View style={styles.card}>
          <Text>Subtotal</Text>
          <Text>500</Text>
        </View>
        <View style={styles.card}>
          <Text>Subtotal</Text>
          <Text>500</Text>
        </View>
        <View style={styles.card}>
          <Text>Subtotal</Text>
          <Text>500</Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
          }}>
          <Button text="Checkout" width="95%" height="7%" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  coreView: {
    backgroundColor: '#FFF',
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
/// finishing 2 screens(2hr)
// login with phone and OTP(4hr)
// details of products (2hr)

// navigation with stack
