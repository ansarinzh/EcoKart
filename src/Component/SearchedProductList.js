import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const SearchedProductList = props => {
  console.log('pro', props.productsFiltered);
  return (
    <View>
      {props.productsFiltered > 0 ? (
        props.productsFiltered.map(item => (
          <TouchableOpacity style={{flexDirection: 'row', margin: 3}}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <View>
          <Text style={{alignSelf: 'center'}}>
            No products match the selected criteria
          </Text>
        </View>
      )}
    </View>
  );
};

export default SearchedProductList;
