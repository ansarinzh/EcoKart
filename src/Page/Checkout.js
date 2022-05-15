import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Color} from '../assets/Color';
import {Fonts} from '../assets/Fonts';
import Button from '../Component/Button';
import CheckoutProductItem from '../Component/CheckoutProductItem';

const Checkout = props => {
  return (
    <View
      style={{
        padding: 15,
        //  backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'space-between',
        flex: 1,
      }}>
      <View style={{height: 375}}>
        <View style={{marginVertical: 10}}>
          <Text style={{marginVertical: 5}}>Order items</Text>

          <FlatList
            data={[1, 2]}
            showsVerticalScrollIndicator={false}
            renderItem={() => <CheckoutProductItem />}
          />
        </View>
      </View>
      <View style={{}}>
        <View style={{marginVertical: 12}}>
          <Text style={{marginVertical: 10}}>Shipping To</Text>
          <View
            style={{
              padding: 10,
              borderColor: Color.primary,
              borderWidth: 1,
              borderRadius: 20,
            }}>
            <Text style={{fontFamily: Fonts.headingFont}}>Address:</Text>
            <Text>
              A-201, Burj Khalifa, Chandni Chowk, Nr. Kashimira, New York -
              400521, Antartica
            </Text>
          </View>
        </View>
        <Text style={{marginVertical: 5}}>Paymet method</Text>
        <View
          style={{
            marginVertical: 5,
            // backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              padding: 10,
              borderColor: Color.primary,
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: 'flex-start',
              marginBottom: 10,
            }}>
            <Text style={{fontFamily: Fonts.headingFont}}>
              Cash on delivery
            </Text>
          </View>
          <View
            style={{
              padding: 10,
              borderColor: Color.primary,
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: 'flex-start',
              marginBottom: 10,
            }}>
            <Text style={{fontFamily: Fonts.headingFont}}>
              Total Amount: 2354
            </Text>
          </View>
        </View>
        <Button
          text="Done"
          width="93%"
          height="7%"
          onclick={() => props.navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default Checkout;
