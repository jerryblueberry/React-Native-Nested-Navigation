/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CartDrawerContent from '../components/CartDrawerContent';

import MainTabNavigator from './MainTabNavigator';
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/LoginScreen';
const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserCredentials = async () => {
      try {
        const userEmail = await AsyncStorage.getItem('userEmail');
        const userPassword = await AsyncStorage.getItem('userPassword');

        if (userEmail !== null && userPassword !== null) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.log('Error retrieving user credentials', error);
      }
    };

    checkUserCredentials();
  }, []);
  const {} = styles;
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Drawer.Navigator
          drawerContent={CartDrawerContent}
          screenOptions={{
            headerShown: false,
          }}>
          <Drawer.Screen name="MainTabs" component={MainTabNavigator} />
          <Drawer.Screen name="Login" component={LoginScreen} />
        </Drawer.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default AppDrawerNavigator;

const styles = StyleSheet.create({});
