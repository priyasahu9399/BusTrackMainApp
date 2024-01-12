import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SignUp from './../screens/signUp';
import StackScreen from './../navigation/StackNavigator';
import DrawerScreen from './../screens/drawerScreen/index';
import SignIn from './../screens/signIn/index';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Root = () => {
  const [token, settoken] = useState('null');
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerScreen {...props} />}
      initialRouteName="Home">
      {token == null ? (
        <>
          
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <Stack.Screen
          name="StackScreen"
          component={StackScreen}
          options={{headerShown: false}}
        />
      )}
    </Drawer.Navigator>
  );
};

export default Root;
