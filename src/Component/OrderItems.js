/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const OrderItems = ({data}) => {
  console.log('dataaa', data);
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 6,
        padding: 13,
        marginVertical: 10,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}>
        <View>
          <Text style={{fontSize: 18}}>Order Name </Text>
          <Text style={{fontSize: 18}}>order date and details</Text>
          <Text style={{fontSize: 18}}>Order ID:135246 </Text>
        </View>

        <View>
          <Image
            style={{
              marginHorizontal: wp('2%'),
              width: wp('20%'),
              height: hp('13%'),
              borderRadius: 20,
              resizeMode: 'contain',
            }}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
            }}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: 10,
          //   backgroundColor: 'red',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          //   margin: 10,
          padding: 10,
        }}>
        <View>
          <Text>Total Amount</Text>
          <Text>RS.{data.totalPrice}</Text>
        </View>
        <View>
          <Text>Expt Delivey</Text>
          <Text>22 April 2022</Text>
        </View>
        <View>
          <Text>Order status</Text>
          <Text>{data.status}</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItems;
