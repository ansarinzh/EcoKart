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
          style={styles.btnCategory}
          onPress={() => {
            props.categoryFilter('all'), props.setActive(-1);
          }}>
          <Image
            style={styles.categoryImg}
            resizeMode="contain"
            source={{
              uri: 'https://picsum.photos/id/237/536/354',
            }}
          />

          <Text style={{marginHorizontal: wp('1%'), color: Color.primaryText}}>
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
              style={[
                styles.btnCategory,
                {
                  backgroundColor:
                    props.active == props.categories.indexOf(item)
                      ? Color.secondary
                      : 'gray',
                },
              ]}>
              <Image
                style={styles.categoryImg}
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
  btnCategory: {
    display: 'flex',
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Color.primary,
    justifyContent: 'center',
    borderRadius: 40,
    alignSelf: 'flex-start',
    marginHorizontal: wp('1.8%'),
    paddingHorizontal: wp('1%'),
    paddingVertical: wp('0.7%'),
  },
  categoryImg:{
    height: hp('5%'),
    width: wp('10%'),
    borderRadius: 50,
  }
});

export default Category;
