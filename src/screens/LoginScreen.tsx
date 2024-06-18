/* eslint-disable prettier/prettier */
import React, {useRef, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleLogin = async () => {
    try {
      console.log(`Login Successful for ${userCredentials.email}`);

      await AsyncStorage.setItem('userEmail', userCredentials.email);
      await AsyncStorage.setItem('userPassword', userCredentials.password);
      //  Might need to change the code structure
      // navigation.navigate('Home');
    } catch (error) {
      console.log('Error While Logging User', error);
    }
  };

  useEffect(() => {
    const checkUserCredentials = async () => {
      try {
        const userEmail = await AsyncStorage.getItem('userEmail');
        const userPassword = await AsyncStorage.getItem('userPassword');

        if (userEmail !== null && userPassword !== null) {
        } else {
          console.log('User credentials not found');
        }
      } catch (error) {
        console.log('Error retrieving user credentials', error);
      }
    };

    checkUserCredentials();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          ref={emailInputRef}
          style={[
            styles.input,
            focusedInput === 'email' && styles.inputFocused,
          ]}
          placeholder="Enter Email"
          onChangeText={text =>
            setUserCredentials({...userCredentials, email: text})
          }
          value={userCredentials.email}
          onFocus={() => setFocusedInput('email')}
          onBlur={() => setFocusedInput(null)}
          onSubmitEditing={() => passwordInputRef.current?.focus()}
          returnKeyType="next"
        />

        <TextInput
          style={[
            styles.input,
            focusedInput === 'password' && styles.inputFocused,
          ]}
          placeholder="Password"
          ref={passwordInputRef}
          secureTextEntry={true}
          onChangeText={text =>
            setUserCredentials({...userCredentials, password: text})
          }
          value={userCredentials.password}
          onBlur={() => setFocusedInput(null)}
          onFocus={() => setFocusedInput('password')}
          onSubmitEditing={handleLogin}
          returnKeyType="done"
        />
      </View>

      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 300,
  },
  inputFocused: {
    borderColor: 'blue', // Border color when input is focused
  },
});

export default LoginScreen;
