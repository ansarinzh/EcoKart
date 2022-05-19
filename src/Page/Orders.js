import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import baseURL from '../assets/common/baseUrl';
import OrderItems from '../Component/OrderItems';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const OrderHandler = () => {
    axios({
      method: 'GET',
      url: `${baseURL}orders`,
    })
      .then(res => {
        console.log('res', res.data);
        setOrders(res.data);
      })
      .catch(err => console.log('err', err));
  };

  useEffect(() => {
    OrderHandler();
  }, []);

  return (
    <View
      style={{
        // display: 'flex',
        padding: 10,
        // flex: 1,
      }}>
      {orders.length > 0 ? (
        orders.map(item => {
          return <OrderItems data={item} />;
        })
      ) : (
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>NO order</Text>
        </View>
      )}
    </View>
  );
};

export default Orders;
