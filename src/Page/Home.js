import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import ProductCard from '../Component/ProductCard';
import products from '../products.json';

const Home = () => {
  return (
    <View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Popular</Text>
      </View>
      <FlatList
        data={products}
        renderItem={data => <ProductCard data={data.item} />}
      />
    </View>
  );
};

export default Home;
