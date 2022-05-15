import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../assets/Color';

const SearchedProductList = props => {
  // console.log('pro', props.productsFiltered);
  return (
    <View>
      {props.productsFiltered.length > 0 ? (
        props.productsFiltered.map(item => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              margin: 3,
              padding: 10,
              alignItems: 'center',
              // backgroundColor: '',
              borderWidth: 0.2,
              borderColor: Color.secondary,
              borderRadius: 20,
            }}
            onPress={() =>
              props.navigation.navigate('Product Detail', {id: item.id})
            }>
            <Image
              style={{
                marginHorizontal: wp('2%'),
                width: wp('13%'),
                height: hp('5%'),
                borderRadius: 20,
                resizeMode: 'contain',
              }}
              source={{
                uri: item
                  ? item.image
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
              }}
            />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <View>
          <Text style={{alignSelf: 'center', height: 200}}>
            No products match the selected criteria
          </Text>
        </View>
      )}
    </View>
  );
};

export default SearchedProductList;
