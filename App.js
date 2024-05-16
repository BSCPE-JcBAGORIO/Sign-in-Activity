import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.inputEmail]}
            placeholder="Email*"
            placeholderTextColor="#000000"
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.inputPassword]}
            placeholder="Password*"
            placeholderTextColor="#000000"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E4053', 
    padding: 20,
  },
  formContainer: {
    width: '90%',
    borderWidth: 20,
    borderRadius: 50,
    padding: 30,
    borderColor: '#1B2631',
    backgroundColor: '#D0D3D4',
  },
  title: {
    fontSize: 34,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft: 10,
  },
  inputEmail: {
    backgroundColor: '#FFFFFF',
  },
  inputPassword: {
    backgroundColor: '#FFFFFF',
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#34495E',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default SignUpPage;

