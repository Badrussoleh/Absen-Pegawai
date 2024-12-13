// Import dependencies
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>
        <Text style={styles.highlight}>Login </Text>Sistem
      </Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999999"
      />
      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        placeholderTextColor="#999999"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999999"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Re - Password"
        placeholderTextColor="#999999"
        secureTextEntry
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/valid')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background
    paddingHorizontal: 20,
    paddingTop: 110,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#114090', // Blue header color
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  highlight: {
    color: '#91d603', // Green color for "Login"
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#F1F1F1', // Light background for inputs
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#114090', // Blue background for the button
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff', // White text color
  },
});

export default LoginScreen;
