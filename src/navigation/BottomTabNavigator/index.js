import React from 'react';
import {
  Image,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images, icons} from '../../constants';
import {COLORS} from './../../constants';
import styles from './styles';
import Home from './../../screens/home/index';
import TrackBus from './../../screens/trackbus/index';
import Profile from './../../screens/Profile/index';
import Search from './../../screens/search/index';

const Tab = createBottomTabNavigator();
const {width, height} = Dimensions.get('window');

const Toggle = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={icons.toggle} style={styles.toggle} />
    </TouchableOpacity>
  );
};

const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.black,
        tabBarLabelStyle: styles.tablebal,
        headerStyle: {backgroundColor: COLORS.white},
        headerTitleStyle: styles.headerTitle,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          title: '',
          headerLeft: () => (
            <View style={styles.row}>
              <Toggle onPress={() => navigation.openDrawer()} />
              <Image source={images.logoc} style={styles.logoicon} />
              <Text style={styles.logoText}>Buddy</Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image source={icons.notification} style={styles.notification} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.home}
              style={[
                styles.icon_set,
                {tintColor: focused ? COLORS.primary : COLORS.gray1},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.search}
              style={[
                styles.icon_set,
                {tintColor: focused ? COLORS.primary : COLORS.gray1},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TrackBus"
        component={TrackBus}
        options={{
          title: 'Bus',
          tabBarLabel: 'Bus',
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.busBottom}
              style={[
                styles.icon_set,
                {tintColor: focused ? COLORS.primary : COLORS.gray1},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.profile}
              style={[
                styles.icon_set,
                {tintColor: focused ? COLORS.primary : COLORS.gray1},
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
