import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {Color} from '../assets/Color';
import Banner from '../Component/Banner';
import Category from '../Component/Category';
import ProductCard from '../Component/ProductCard';
import SearchProduct from '../Component/SearchProduct';
import products from '../products.json';
import axios from 'axios';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../Component/Header';
import categories from '../categories.json';
import SearchedProductList from '../Component/SearchedProductList';
import {Fonts} from '../assets/Fonts';

import baseURL from '../assets/common/baseUrl';

const Home = props => {
  const [focus, setFocus] = useState();
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [loading, setLoading] = useState(true);
  //products
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useFocusEffect(
    useCallback(() => {
      setFocus(false);
      setActive(-1);

      // Products;
      axios
        .get(`${baseURL}products`)
        .then(res => {
          setProducts(res.data);

          setProductsFiltered(res.data);
          setProductsCtg(res?.data);
          setInitialState(res.data);
          setLoading(false);
        })
        .catch(error => {
          console.log('Api call error', error);
        });

      // // Categories
      axios
        .get(`${baseURL}categories`)
        .then(res => {
          // console.log('resCate', res);
          setCategories(res.data);
        })
        .catch(error => {
          console.log('Api call error');
        });

      return () => {
        setProducts([]);
        setProductsFiltered([]);
        setFocus();
        setCategories([]);
        setActive();
        setInitialState();
      };
    }, []),
  );

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
      {loading === false ? (
        <View>
          <Header
            name="Hey Buddy"
            description="Welcome to my app"
            navigation={props.navigation}
            HeaderName="Home"
            screenName="cart"
            iconName="arrowleft"
            cartIcon="shopping-cart"
            noQty="noQty"
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
                    fontFamily: Fonts.headingFont,
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
                <Text style={{fontSize: 20, fontFamily: Fonts.headingFont}}>
                  Popular
                </Text>

                {productsCtg.length > 0 ? (
                  <FlatList
                    data={productsCtg}
                    renderItem={data => (
                      <ProductCard
                        navigation={props.navigation}
                        data={data.item}
                      />
                    )}
                  />
                ) : (
                  <View
                    style={{
                      height: 200,
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>No products found</Text>
                  </View>
                )}
              </View>
            </ScrollView>
          )}
        </View>
      ) : (
        <View
          style={{
            backgroundColor: '#f2f2f2',
            marginTop: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="red" />
        </View>
      )}
    </View>
  );
};

export default Home;
