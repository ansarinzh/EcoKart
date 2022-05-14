import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Button from '../Component/Button';
import InputText from '../Component/InputText';
import PhoneInput from '../Component/PhoneInput';

const Checkout = props => {
  // const []
  return (
    <ScrollView>
      <View style={{paddingHorizontal: 15, paddingVertical: 20}}>
        <Text style={{fontFamily: 'Rubik-SemiBold', fontSize: 18}}>
          Add a new address
        </Text>
        <InputText placeholder="Enter Full Name" label="Full Name" />
        {/* <InputText placeholder="Enter Mobile Number" label="Mobile Number" /> */}
        <PhoneInput
          label="Mobile Number"
          placeholder="Enter Mobile Number"
          width="90%"
          maxLength={10}
          pv={0}
          mv={10}
        />
        <InputText
          placeholder="Flat, House no., Building."
          label="Flat, House no., Building"
        />
        <InputText
          placeholder="Area, Street, Sector, Village"
          label="Area, Street, Sector, Village"
        />
        <InputText placeholder="Enter Landmark" label="Landmark" />
        <InputText
          placeholder="Enter Pin Code"
          label="Pincode"
          keyBoarType="numeric"
        />
        <InputText placeholder="Enter Town/City" label="Town/City" />
        <InputText placeholder="Enter State" label="State" />
        <View style={{marginVertical: 10}}>
          <Button text="Proceed" width="95%" height="7%" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Checkout;
