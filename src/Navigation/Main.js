import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

//stack
import HomeNavigator from './Homenavigator';
import CartNavigator from './Cartnavigator';
import UserNavigator from './Usernavigator';
import WishlistNavigator from './WishlistNavigator';
import {Color} from '../assets/Color';

const Main = () => {
  const getRouteNameHome = route => {
    // console.log('rr', route.name);

    if (route.name === 'Cart') {
      return false;
    }
    // const routeName = route.state
    //   ? route.state.routes[route.state.index].name
    //   : '';
    // console.log('dddd', routeName);
    // switch (route) {
    //   case 'Cart':
    //     // case 'Schedulescreen':
    //     return false;

    //   default:
    //     return true;
    // }
  };

  console.log('get', getRouteNameHome);

  return (
    <Tab.Navigator
      // initialRouteName="Home"

      tabBarOptions={{
        keyboardHidesTabBar: true,
        // showLabel: true,
        activeTintColor: Color.primary,
      }}>
      <Tab.Screen
        name="Home"
        // options={({route}) => {
        //   return {
        //     headerShown: false,
        //     tabBarVisible: getRouteNameHome(route),
        //     tabBarIcon: ({color, size}) => (
        //       <Icon name="home" color={color} size={30} />
        //     ),
        //   };
        // }}
        component={HomeNavigator}
        options={{
          headerShown: false,
          // tabBarStyle: {display: 'none'},
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={30} />,
        }}
      />
      <Tab.Screen
        // options={{
        //   tabBarLabel: 'Order',

        //   tabBarIcon: ({color, size}) => (
        //     <FIcon name="shopping-cart" color={color} size={size} />
        //   ),
        //   tabBarVisible: false,
        // }}
        name="Cart"
        component={CartNavigator}
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Wishlist"
        component={WishlistNavigator}
        options={{
          headerShown: false,
          // tabBarStyle: {display: 'none'},
          tabBarIcon: ({color}) => (
            <Icon name="heart" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={WishlistNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
