/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Color} from '../assets/Color';
import Iconleft from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {currentUserSet} from '../Redux/Action/CartAction';

const Header = ({
  name,
  description,
  navigation,
  HeaderName,
  iconName,
  screenName,
  noQty,
  cartIcon,
}) => {
  const CartLength = useSelector(state => state.CartReducer);
  // console.log('ddd', CartLength);
  // const token = AsyncStorage.getItem('token');
  // console.log('token', token);
  const dispatch = useDispatch();
  const logOut = async () => {
    AsyncStorage.clear();

    dispatch(currentUserSet('false'));
    // console.log('asf');
    // if () {

    // }
    // await AsyncStorage.clear();
    // console.log('ggg', token);
  };

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(res => {
        console.log('res_token', res);
      })
      .catch(err => console.log('err', err));
  }, []);
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        // backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
      }}>
      {HeaderName !== 'Home' ? (
        <View
          style={{
            // backgroundColor: 'yellow',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 5,
          }}>
          <Iconleft
            name={iconName}
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={{marginHorizontal: 10, fontSize: 19}}>{screenName}</Text>
        </View>
      ) : (
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',

              // ,
            }}>
            {name}
          </Text>
          <Text style={{marginVertical: 4}}>{description}</Text>
        </View>
      )}

      {CartLength?.carts?.length > 0 && noQty === 'noQty' ? (
        <View
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: Color.secondary,
            borderRadius: 50,
            height: 18,
            width: 18,
            alignItems: 'center',
            right: 12,
            top: 20,
            zIndex: 1,
          }}>
          <Text>{CartLength?.carts?.length}</Text>
        </View>
      ) : null}

      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Icon
          onPress={() => navigation.navigate('cart')}
          name={cartIcon}
          color={Color.primary}
          size={30}
          style={{marginLeft: 10}}
        />
      </View>
    </View>
  );
};

export default Header;
