/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ScreenWrapper from '../components/SafeAreaView/ScreenWrapper';
import {CartContext} from '../context/CartContext/CartContext';
// import {useNavigation} from '@react-navigation/native';
const DetailScreen = ({route}) => {
  // const navigation = useNavigation();
  const {item} = route.params;
  const {addToCart} = useContext(CartContext);

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{uri: item.image}} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>
          <TouchableOpacity
            onPress={() => addToCart(item)}
            style={{
              alignSelf: 'center',
              backgroundColor: 'blue',
              borderRadius: 10,
              paddingHorizontal: 20,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: 'white',
                padding: 10,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'stretch',
    borderRadius: 10,
    marginBottom: 20,
  },
  productDetails: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e8b57',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
});
