/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import AppDrawerNavigator from './src/navigation/AppDrawerNavigator';
import {CartProvider} from './src/context/CartContext/CartContext';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from './src/services/queryClient';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <AppDrawerNavigator />
      </CartProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
