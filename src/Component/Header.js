import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Color} from '../assets/Color';
import Iconleft from 'react-native-vector-icons/AntDesign';

import {useSelector} from 'react-redux';

const Header = ({name, description, navigation}) => {
  const CartLength = useSelector(state => state.CartReducer);

  // console.log('cartlength', CartLength.carts.length);

  return (
    <View
      style={{
        // backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
      }}>
      {navigation ? (
        <>
          <Iconleft
            name="arrowleft"
            size={30}
            onPress={() => navigation.goBack()}
          />
        </>
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
      {CartLength?.carts?.length > 0 ? (
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

      <View style={{marginHorizontal: 10}}>
        <Icon name="shopping-cart" color={Color.primary} size={30} />
      </View>
    </View>
  );
};

export default Header;
