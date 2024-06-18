/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';

import HomeStackNavigator from './HomeStackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessageScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: 'orange',
      tabBarStyle: {
        backgroundColor: 'white',
        borderTopWidth: 0,
      },
    }}>
    <Tab.Screen
      name="HomeStack"
      component={HomeStackNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <View style={{alignItems: 'center'}}>
            <Ionicons name="home-outline" color={color} size={size} />
            <Text style={{color}}>Home</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Message"
      component={MessageScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <View style={{alignItems: 'center'}}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              color={color}
              size={size}
            />
            <Text style={{color}}>Messages</Text>
          </View>
        ),
      }}
    />

    <Tab.Screen
      name="Accounts"
      component={AccountScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <View style={{alignItems: 'center'}}>
            <AntDesign name="user" color={color} size={size} />
            <Text style={{color}}>Account</Text>
          </View>
        ),
      }}
    />

    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <View style={{alignItems: 'center'}}>
            <Ionicons name="settings-outline" color={color} size={size} />
            <Text style={{color}}>Settings</Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabNavigator;
