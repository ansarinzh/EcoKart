import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Color} from '../assets/Color';
import Button from '../Component/Button';
import Counter from '../Component/Counter';
import Header from '../Component/Header';

const ProductDetails = props => {
  console.log('pros', props.navigation);
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const removeAddToCart = () => {
    count == 0 ? 0 : setCount(prevCount => prevCount - 1);
  };

  return (
    <View
      style={{
        paddingHorizontal: 10,
        // backgroundColor: 'yellow',
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <Header navigation={props.navigation} />
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '800',
            color: Color.primaryText,
            textAlign: 'center',
            padding: 10,
          }}>
          Frutti Pizza
        </Text>
        <View style={{display: 'flex', alignItems: 'center'}}>
          <Image
            style={{
              height: hp('30%'),
              width: wp('95%'),
              borderRadius: 15,
              resizeMode: 'contain',
            }}
            source={{
              uri: 'https://media-cdn.tripadvisor.com/media/photo-s/19/1e/1a/3a/pizza-hut.jpg',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingVertical: 10,
            }}>
            {/* <Counter
            removeFromCart={removeAddToCart}
            count={count}
            addToCart={onIncrement}
          /> */}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              // backgroundColor:"red"
            }}>
            <Text
              style={{
                fontWeight: '600',
                color: Color.primaryText,
                fontSize: 20,
              }}>
              Frutti Pizza
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // justifyContent: 'center',
              marginVertical: 5,
              // backgroundColor:"blue"
            }}>
            <Text
              style={{
                fontWeight: '600',
                color: Color.primaryText,
                fontSize: 20,
              }}>
              432/kg
            </Text>
            <Text
              style={{
                fontWeight: '600',
                color: Color.primaryText,
                fontSize: 20,
              }}>
              900
            </Text>
          </View>
          {/* <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight:"600", color: Color.primaryText}}>CALORIES</Text>
          <Text style={{fontWeight:"600", color: Color.primaryText}}>RATING</Text>
          <Text style={{fontWeight:"600", color: Color.primaryText}}>DELIVERY TIME</Text>

        </View> */}
          {/* <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight:"600", color: Color.primaryText}}>65 Calories</Text>
          <Text style={{fontWeight:"600", color: Color.primaryText}}>Rating : 4.5</Text>
          <Text style={{fontWeight:"600", color: Color.primaryText}}>20-30 min</Text>

        </View> */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            {/* <Text style={{fontWeight:"600", color: Color.primaryText, fontSize: 20}}>$9.50</Text> */}
          </View>

          <View style={{marginVertical: 15}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: Color.primaryText,
              }}>
              Details
            </Text>
            <Text style={{fontWeight: '600'}}>
              Pizza is a savory dish of Italian origin, consisting of and
              usually round , flattended base of leaveened wheat
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginVertical: 15}}>
        <Button
          text="ADD TO CART"
          width="95%"
          height="7%"
          onclick={() => props.navigation.navigate('cart')}
        />
      </View>
    </View>
  );
};

export default ProductDetails;
