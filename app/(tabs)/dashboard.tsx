import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const DashboardScreen = () => {
  const router = useRouter(); // Hook for navigation
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          <Text style={styles.highlight}>Smart </Text>Medical Management
        </Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.content}>
        {/* Promotional Banner */}
        <View style={styles.bannerContainer}>
          <Image
           source={require('../../assets/logo/header.jpg')} // Replace with your banner image URL
            style={styles.banner}
          />
        </View>

        {/* Feature Icons */}
        <View style={styles.featuresContainer}>
          {[
            { label: 'Absensi Dokter', icon: '👨‍⚕️' },
            { label: 'Jadwal Dokter', icon: '📅' },
            { label: 'Chat Dokter', icon: '💬' },
            { label: 'Pemeriksaan LAB', icon: '🧪' },
            { label: 'Informasi Rumah Sakit', icon: '🏥' },
            { label: 'Pemeriksaan Kesehatan', icon: '🔍' },
            { label: 'Perawatan Di Rumah', icon: '🏠' },
            { label: 'Semua Layanan', icon: '🔄' },
          ].map((feature, index) => (
            <TouchableOpacity key={index} style={styles.featureItem}>
              <Text style={styles.featureIcon}>{feature.icon}</Text>
              <Text style={styles.featureLabel}>{feature.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Health Information */}
        <View style={styles.healthInfoContainer}>
          <Text style={styles.sectionTitle}>Ketahui informasi kesehatan terbaru!</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
            {['Semua', 'Kesehatan Tubuh', 'Ibu dan Anak', 'Pola Hidup'].map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryButton}>
                <Text style={styles.categoryButtonText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.newsCard}>
            <Image
              source={require('../../assets/logo/sakit.jpg')} // Replace with your banner image URL
              style={styles.newsImage}
            />
            <Text style={styles.newsText}>
              Nyeri Pinggul hingga Sulit Berdiri? Ini Gejala Diabetic Amyotrophy yang..
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        {[
          { label: 'Beranda', icon: '🏠' },
          { label: 'Activity', icon: '📋' },
          { label: 'Rekam Medis', icon: '📂' },
          { label: 'Profil', icon: '👤' },
        ].map((navItem, index) => (
          <TouchableOpacity key={index} style={styles.navItem}>
            <Text style={styles.navIcon}>{navItem.icon}</Text>
            <Text style={styles.navLabel}>{navItem.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#114090',
    padding: 10,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  highlight: {
    color: '#91d603',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  bannerContainer: {
    marginVertical: 25,
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  featureItem: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 10,
  },
  featureIcon: {
    fontSize: 30,
    marginBottom: 5,
  },
  featureLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  healthInfoContainer: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryScroll: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: '#F1F1F1',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryButtonText: {
    fontSize: 12,
    color: '#114090',
  },
  newsCard: {
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  newsImage: {
    width: 150,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  newsText: {
    fontSize: 14,
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#ffffff',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
  },
  navLabel: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default DashboardScreen;
