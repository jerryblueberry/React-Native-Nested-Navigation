/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import ScreenWrapper from '../components/SafeAreaView/ScreenWrapper';
import ProductList from '../components/ProductsFetch/ProductList';
const HomeScreen = () => {
  const navigation = useNavigation();
  const {} = styles;
  return (
    <ScreenWrapper>
      <View>
        {/* <Text
          style={{
            alignSelf: 'center',
          }}></Text> */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Text>HomeScreen</Text>
        </TouchableOpacity> */}
      </View>
      <ProductList />
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
