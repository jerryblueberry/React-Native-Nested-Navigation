/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import {CartContext} from '../context/CartContext/CartContext';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CartDrawerContent = () => {
  const navigation = useNavigation();
  const {cart, removeFromCart} = useContext(CartContext);

  const renderProductItem = ({item}) => (
    <View style={styles.productItem}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Detail', {item: item})}>
        <Image source={{uri: item.image}} style={styles.productImage} />

        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        </View>
        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
          {/* <Text>Remove</Text> */}
          <MaterialCommunityIcons
            name="delete-circle"
            size={31}
            color={'red'}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Cart Details</Text>
      <FlatList
        data={cart}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        style={styles.productList}
      />
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => Alert.alert('Proceed to Checkout')}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  productImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 5,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  checkoutButton: {
    backgroundColor: '#2e8b57',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
