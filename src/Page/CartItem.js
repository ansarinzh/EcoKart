import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Button from '../Component/Button';
import CartCard from '../Component/CartCard';
import Header from '../Component/Header';
import {SwipeListView} from 'react-native-swipe-list-view';

import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {RemoveFromCart} from '../Redux/Action/CartAction';
const CartItem = props => {
  const dispatch = useDispatch();
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
            <Header navigation={props.navigation} />

            <SwipeListView
              data={cartItem}
              renderItem={data => {
                console.log('ddaaata', data);
                return <CartCard data={data.item} />;
              }}
              renderHiddenItem={data => (
                <View
                  style={{
                    // backgroundColor: 'yellow',
                    flex: 1,
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    style={{
                      // backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                      paddingRight: 20,
                      // height: 70,
                      width: '20%',
                      zIndex: 111,
                    }}
                    onPress={() => dispatch(RemoveFromCart(data.item._id))}>
                    <Icon
                      style={{zIndex: -111}}
                      name="trash"
                      color={'black'}
                      size={30}
                    />
                  </TouchableOpacity>
                </View>
              )}
              disableRightSwipe={true}
              previewOpenDelay={3000}
              friction={100}
              tension={40}
              leftOpenValue={75}
              stopLeftSwipe={75}
              rightOpenValue={-50}
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
