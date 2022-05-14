import React, {useState} from 'react';
import {View, Text, ScrollView, ToastAndroid} from 'react-native';
import Button from '../Component/Button';
import InputText from '../Component/InputText';
import PhoneInput from '../Component/PhoneInput';

const Billing = props => {
  const [billing, setBilling] = useState({
    name: '',
    mobileNo: '',
    flat: '',
    area: '',
    landmark: '',
    pincode: '',
    town: '',
    state: 'Maharashtra',
  });
  const [err, setErr] = useState(false);

  const handleChange = (name, value) => {
    setBilling({
      ...billing,
      [name]: value,
    });
  };

  const validationHandle = props => {
    if (billing.name == '') {
      ToastAndroid.show('Name Cannot be empty', ToastAndroid.SHORT);
    } else if (billing.mobileNo == '') {
      ToastAndroid.show('Mobile Number Cannot be empty', ToastAndroid.SHORT);
    } else if (isNaN(billing.mobileNo)) {
      ToastAndroid.show('Mobile Number cannot be alphabet', ToastAndroid.SHORT);
    } else if (billing.flat == '') {
      ToastAndroid.show('Flat No. Cannot be empty', ToastAndroid.SHORT);
    } else if (billing.area == '') {
      ToastAndroid.show('Area Cannot be empty', ToastAndroid.SHORT);
    } else if (billing.landmark == '') {
      ToastAndroid.show('Landmark Cannot be empty', ToastAndroid.SHORT);
    } else if (billing.pincode == '') {
      ToastAndroid.show('Pincode Cannot be empty', ToastAndroid.SHORT);
    } else if (billing.town == '') {
      ToastAndroid.show('Town Cannot be empty', ToastAndroid.SHORT);
    } else if (billing.state == '') {
      ToastAndroid.show('State Cannot be empty', ToastAndroid.SHORT);
    }
    props.navigation.navigate('checkout');
  };
  // const []
  return (
    <ScrollView>
      <View style={{paddingHorizontal: 15, paddingVertical: 20}}>
        <Text style={{fontFamily: 'Rubik-SemiBold', fontSize: 18}}>
          Add a new address
        </Text>
        <InputText
          placeholder="Enter Full Name"
          label="Full Name *"
          onChangeText={name => handleChange('name', name)}
        />

        {/* <InputText placeholder="Enter Mobile Number" label="Mobile Number" /> */}
        <PhoneInput
          label="Mobile Number *"
          placeholder="Enter Mobile Number"
          width="90%"
          maxLength={10}
          pv={0}
          mv={10}
          onChangeText={phone => handleChange('mobileNo', phone)}
        />
        <InputText
          placeholder="Flat, House no., Building."
          label="Flat, House no., Building *"
          onChangeText={flat => handleChange('flat', flat)}
        />
        <InputText
          placeholder="Area, Street, Sector, Village"
          label="Area, Street, Sector, Village *"
          onChangeText={area => handleChange('area', area)}
        />
        <InputText
          placeholder="Enter Landmark"
          label="Landmark *"
          onChangeText={landmark => handleChange('landmark', landmark)}
        />
        <InputText
          placeholder="Enter Pin Code"
          label="Pincode *"
          keyBoarType="numeric"
          onChangeText={pincode => handleChange('pincode', pincode)}
        />
        <InputText
          placeholder="Enter Town/City"
          label="Town/City *"
          onChangeText={town => handleChange('town', town)}
        />
        <InputText
          placeholder="Enter State"
          label="State *"
          value={billing.state}
          onChangeText={state => handleChange('state', state)}
        />
        <View style={{marginVertical: 10}}>
          <Button
            text="Proceed"
            width="95%"
            height="7%"
            onclick={() => props.navigation.navigate('checkout')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Billing;
