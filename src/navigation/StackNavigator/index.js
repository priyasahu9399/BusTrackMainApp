import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
import BottomTab from './../BottomTabNavigator/index';
import styles from './styles';
import JourneyMap from './../../screens/journeyMap/index';
import BusDetail from './../../screens/busdetail/index';
import Details from "./../../screens/details/index";
import Payment from "./../../screens/payment/index";

const {width, height} = Dimensions.get('window');

const Stack = createStackNavigator();

const StackScreen = ({navigation, route}) => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BusDetail"
        component={BusDetail}
        options={{
          title: 'Bus Details',
        }}
      />
      <Stack.Screen name="Details" component={Details} />

      <Stack.Screen name="Payment" component={Payment} />

      <Stack.Screen
        name="JourneyMap"
        component={JourneyMap}
        options={{
          title: 'Journey',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
