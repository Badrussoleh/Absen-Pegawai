import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ScheduleScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>JADWAL DOKTER</Text>

      {/* Radiology Schedule */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>POLI SPESIALIS RADIOLOGI</Text>
        <View style={styles.item}>
          <Text style={styles.doctorName}>Dr. Rachmat Yasin, Sp.Rad</Text>
          <Text style={styles.schedule}>Praktek Pukul 06.00 - 08.00 WIB</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.doctorName}>Dr. Andi Setiawan, Sp.Rad</Text>
          <Text style={styles.schedule}>Praktek Pukul 09.00 - 12.00 WIB</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.doctorName}>Dr. Susilowati, Sp.Rad, m.Kes</Text>
          <Text style={styles.schedule}>Praktek Pukul 12.00 - Selesai</Text>
        </View>
      </View>

      {/* Additional sections like Pediatrics, Urology, etc. */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#005b99',
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  schedule: {
    fontSize: 14,
    color: '#666',
  },
});

export default ScheduleScreen;
