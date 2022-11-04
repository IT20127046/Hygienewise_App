/**
 * This is the Login compoenets of the application
 * User can login using thier login credentilas
 */
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Background from '../../components/auth/Background';
import Logo from '../../components/auth/Logo';
import TextInput from '../../components/auth/TextInput';
import SubmitButton from '../../components/auth/SubmitButton';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Login() {
  const Navigation = useNavigation();

  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  // This function call when the user click login button
  const onLoginPressed = () => {
    // Create constant object to pass value to backend
    const data = {
      userID: email.value,
      password: password.value,
    };

    //Call POST method to validate user crenditals form backend and get reponse
    axios
      .post('http://192.168.43.153:5000/user/login', data)
      .then(function (response) {
        if (response.data.success) {
          alert('Login Success');
          setTimeout(() => {
            Navigation.navigate('Home');
          }, 2000);
        }
      })
      .catch(function (error) {
        alert('Login Fail');
      });
  };

  return (
    <Background>
      <Logo />
      <Text style={styles.header}>Welcome Back</Text>

      <TextInput
        label="User Name"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
      />

      <TextInput
        label="Password"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        secureTextEntry
      />

      <SubmitButton mode="contained" color="#6495ed" onPress={onLoginPressed}>
        Login
      </SubmitButton>

      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
  },
});
