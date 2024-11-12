import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logoText}>yukHADIR</Text>
        <Text style={styles.subtitle}>Absensi Pegawai</Text>
      </View>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Selamat datang, Nama!</Text>
      <Text style={styles.quote}>‘Waktu adalah uang, Selamat bekerja’</Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/AbsensiMasuk')}>
        <Text style={styles.buttonText}>Absensi Masuk</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.outButton]}>
        <Text style={styles.buttonText}>Absensi Keluar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mulai Istirahat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.breakEndButton]}>
        <Text style={styles.buttonText}>Selesai Istirahat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  header: {
    backgroundColor: '#4CAF50',
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  logoText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
  quote: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  outButton: {
    borderColor: '#F44336',
  },
  breakEndButton: {
    borderColor: '#F44336',
  },
});
