/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



const OrderItems = ({data}) => {
  // console.log('dataaa', data);
  return (
    <View style={Styles.orderCard}>
      <View
        style={Styles.orderTopDetail}>
        <View>
          <Text style={Styles.orderFont}>Order Name </Text>
          <Text style={Styles.orderFont}>order date and details</Text>
          <Text style={Styles.orderFont}>Order ID:135246 </Text>
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
        style={Styles.orderBtmDetail}>
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

const Styles = StyleSheet.create({
  orderCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 6,
    padding: hp('1.85%'),
    marginVertical: hp("1.4%"),
  },
  orderTopDetail:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp("2.8%"),
  },
  orderFont:{
    fontSize: wp("4.5%")
  },
  orderBtmDetail: {
    marginTop: hp('1.5%'),
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: wp('2.5%'),
  }
});
export default OrderItems;
