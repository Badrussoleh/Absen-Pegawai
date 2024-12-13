// Import dependencies
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const LanguageSelectionScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>
        Smart <Text style={styles.highlight}>Medical</Text>
      </Text>
      <Text style={styles.subtitle}>Management</Text>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/login')} 
      >
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/login')} 
      >
        <Text style={styles.buttonText}>Indonesia</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background
  },
  title: {
    fontSize: 30, // Main title font size
    fontWeight: 'bold',
    color: '#91d603', // Green for "Smart"
    textAlign: 'center',
  },
  highlight: {
    color: '#114090', // Blue for "Medical"
  },
  subtitle: {
    fontSize: 16,
    color: '#333333', // Subtitle color
    marginBottom: 40, // Space between subtitle and buttons
    textAlign: 'center',
  },
  button: {
    width: '80%', // Button width
    backgroundColor: '#F1F1F1', // Light button background
    padding: 15, // Padding for the button
    borderRadius: 25, // Rounded corners
    alignItems: 'center',
    marginBottom: 20, // Space between buttons
    shadowColor: '#000', // Button shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Shadow for Android
  },
  buttonText: {
    fontSize: 16,
    color: '#333333', // Text color
    fontWeight: '500',
  },
});

export default LanguageSelectionScreen;
