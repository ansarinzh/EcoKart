import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import InputText from '../Component/InputText';

const Checkout = props => {
  return (
    <ScrollView>
      <Text>Checkout</Text>
      <InputText placeholder="Enter Full Name" label="Full Name" />
      <InputText placeholder="Enter Mobile Number" label="Mobile Number" />
      <InputText
        placeholder="Flat, House no., Building."
        label="Flat, House no., Building"
      />
      <InputText
        placeholder="Area, Street, Sector, Village"
        label="Area, Street, Sector, Village"
      />
      <InputText
        placeholder="Enter Landmark"
        label="Landmark"
      />
      <InputText
        placeholder="Enter Town/City"
        label="Town/City"
      />
      <InputText
        placeholder="Enter State"
        label="State"
      />
    </ScrollView>
  );
};

export default Checkout;
