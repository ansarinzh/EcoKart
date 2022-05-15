import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Color} from '../assets/Color';

const Category = props => {
  // console.log('proops', props);
  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            display: 'flex',
            backgroundColor: 'gray',
            // props.active == -1 ? Color.primary : Color.secondary,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: Color.primary,
            // borderWidth: 1,
            justifyContent: 'center',
            borderRadius: 40,
            alignSelf: 'flex-start',
            marginHorizontal: 5,
            paddingHorizontal: 3,
            paddingVertical: 3,
          }}
          onPress={() => {
            props.categoryFilter('all'), props.setActive(-1);
          }}>
          <Image
            style={{
              height: hp('5%'),
              width: wp('10%'),
              borderRadius: 50,
              // margin: 5,
            }}
            resizeMode="contain"
            source={{
              uri: 'https://picsum.photos/id/237/536/354',
            }}
          />

          <Text style={{marginHorizontal: 4, color: Color.primaryText}}>
            All
          </Text>
        </TouchableOpacity>

        {props.categories.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.categoryFilter(item.id),
                  props.setActive(props.categories.indexOf(item));
              }}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                display: 'flex',
                backgroundColor:
                  props.active == props.categories.indexOf(item)
                    ? Color.secondary
                    : 'gray',
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: Color.primary,
                // borderWidth: 1,
                justifyContent: 'center',
                borderRadius: 40,
                alignSelf: 'flex-start',
                marginHorizontal: 5,
                paddingHorizontal: 3,
                paddingVertical: 3,
              }}>
              <Image
                style={{
                  height: hp('5%'),
                  width: wp('10%'),
                  borderRadius: 50,
                  // margin: 5,
                }}
                resizeMode="contain"
                source={{
                  uri: item
                    ? item.icon
                    : 'https://picsum.photos/id/237/536/354',
                }}
              />
              <Text style={{marginHorizontal: 4, color: Color.primaryText}}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: 'red',
  },
  inactive: {
    backgroundColor: 'blue',
  },
});

export default Category;
