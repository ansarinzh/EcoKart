import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {Color} from '../assets/Color';
import Banner from '../Component/Banner';
import Category from '../Component/Category';
import ProductCard from '../Component/ProductCard';
import SearchProduct from '../Component/SearchProduct';
import products from '../products.json';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const Home = props => {
  // console.log('navi', props.navigation);
  return (
    <View style={{backgroundColor: Color.btnTextColor}}>
      <SearchProduct />
      <View>
        <Banner />
      </View>
      <View style={{marginVertical: wp('3%')}}>
        <FlatList
          data={[1, 2, 3, 4]}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={() => <Category />}
        />
      </View>

      {/* <View>
        <Text style={{fontSize: 20, fontWeight: '700'}}>Popular</Text>
      </View> */}
      <FlatList
        data={products}
        renderItem={data => (
          <ProductCard navigation={props.navigation} data={data.item} />
        )}
      />
    </View>
  );
};

export default Home;
