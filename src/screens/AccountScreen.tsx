/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountScreen = ({navigation}) => {
  const {} = styles;
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('LoggedOut Successfully');
      navigation.navigate('Login');
    } catch (error) {
      console.log('error while clearing storage', error);
    }
  };
  return (
    <View>
      <View>
        <TouchableOpacity onPress={clearStorage}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
