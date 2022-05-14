import React, {useState} from 'react';
import {View, Text, ScrollView, FlatList, RefreshControl} from 'react-native';
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
import Header from '../Component/Header';
import categories from '../categories.json';
import SearchedProductList from '../Component/SearchedProductList';
const Home = props => {
  const [focus, setFocus] = useState();
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);

  const onRefresh = () => {
    setRefreshing(true);
    new Promise(resolve => setTimeout(resolve, 2000)).then(() =>
      setRefreshing(false),
    );
  };

  // Product Methods
  const searchProduct = text => {
    setProductsFiltered(
      products.filter(i => i.name.toLowerCase().includes(text.toLowerCase())),
    );
  };

  const openList = () => {
    setFocus(true);
  };
  const closeList = () => {
    setFocus(false);
  };

  // Categories
  const changeCtg = ctg => {
    console.log('ctg', ctg);
    {
      ctg === 'all'
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(
              products.filter(i => i?.category?._id === ctg ?? []),
              setActive(true),
            ),
          ];
    }
  };
  return (
    <View style={{backgroundColor: Color.btnTextColor}}>
      <Header
        name="Hey Buddy"
        description="Welcome to my app"
        navigation={props.navigation}
      />
      <SearchProduct
        onFocus={openList}
        onChangeText={text => searchProduct(text)}
        focus={focus}
        closeList={closeList}
      />

      {focus ? (
        <SearchedProductList
          navigation={props.navigation}
          productsFiltered={productsFiltered}
        />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View>
            <Banner />
          </View>

          <View style={{padding: 10}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                marginBottom: 15,
                marginHorizontal: 5,
                fontFamily: 'Macondo-Regular',
              }}>
              Category
            </Text>
            <Category
              categories={categories}
              categoryFilter={changeCtg}
              productsCtg={productsCtg}
              active={active}
              setActive={setActive}
            />
          </View>

          <View style={{padding: 10}}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>Popular</Text>
            <FlatList
              data={products}
              renderItem={data => (
                <ProductCard navigation={props.navigation} data={data.item} />
              )}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Home;
