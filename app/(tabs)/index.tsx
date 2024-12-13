// Import dependencies
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    // Simulate loading time, then navigate to the home screen
    const timeout = setTimeout(() => {
      router.replace('/homescreen'); // Change '/home' to your main route
    }, 5000); 

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo/splash-logo.png')} // Replace with your logo path
        style={styles.logo}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Change background color if needed
  },
  logo: {
    width: 350, // Adjust logo size
    height: 350,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default SplashScreen;
