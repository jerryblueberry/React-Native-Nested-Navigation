/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';
import {useNavigation, DrawerActions, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CartContext} from '../../context/CartContext/CartContext';
const ScreenWrapper = ({children}) => {
  const {cart} = useContext(CartContext);

  const navigation = useNavigation();
  const route = useRoute();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      //   Alert.alert('Can't go back');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {route.name !== 'Home' && (
          <TouchableOpacity style={styles.headerButton} onPress={handleBack}>
            <Ionicons name="chevron-back-outline" size={31} />
          </TouchableOpacity>
        )}
        <View style={{flex: 1}} />
        {route.name !== 'Settings' && (
          <TouchableOpacity style={styles.headerButton} onPress={openDrawer}>
            <Ionicons name="cart-outline" size={31} />
            {cart.length > 0 && (
              <View
                style={{
                  position: 'absolute',
                  top: -5,
                  right: -5,
                  backgroundColor: 'orange',
                  width: 25,
                  height: 25,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {cart.length}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerButton: {
    padding: 5,
    position: 'relative',
    // borderRadius: 5,
    // backgroundColor: '#ccc',
  },
});

export default ScreenWrapper;
