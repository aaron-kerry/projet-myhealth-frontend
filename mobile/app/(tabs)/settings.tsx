import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { User, Bell, Lock, CircleHelp as HelpCircle, FileText, LogOut, ChevronRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();
  const renderMenuItem = (icon: React.ReactNode, title: string, isDanger = false) => (
    <TouchableOpacity 
      style={styles.menuItem}
      activeOpacity={0.7}
    >
      <View style={styles.menuIconTitle}>
        {icon}
        <Text style={[styles.menuTitle, isDanger && styles.dangerText]}>
          {title}
        </Text>
      </View>
      <ChevronRight size={20} color={isDanger ? Colors.danger : Colors.textLight} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Paramètres</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => router.push("/(screens)/Profil")}>
        <View style={styles.profileSection}>
          <View style={styles.profileImage}>
            <Text style={styles.profileInitial}>N</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Nom Prénom</Text>
            <Text style={styles.profileEmail}>example@email.com</Text>
          </View>
        </View>
        </TouchableOpacity>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Compte</Text>
          {renderMenuItem(
            <User size={22} color={Colors.primary} style={styles.menuIcon} />, 
            "Informations personnelles"
          )}
          {renderMenuItem(
            <Bell size={22} color={Colors.primary} style={styles.menuIcon} />, 
            "Notifications"
          )}
          {renderMenuItem(
            <Lock size={22} color={Colors.primary} style={styles.menuIcon} />, 
            "Confidentialité et sécurité"
          )}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Autres</Text>
          {renderMenuItem(
            <HelpCircle size={22} color={Colors.primary} style={styles.menuIcon} />, 
            "Aide et support"
          )}
          {renderMenuItem(
            <FileText size={22} color={Colors.primary} style={styles.menuIcon} />, 
            "Conditions d'utilisation"
          )}
        </View>
        
        <View style={styles.section}>
          {renderMenuItem(
            <LogOut size={22} color={Colors.danger} style={styles.menuIcon} />, 
            "Déconnexion",
            true
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textDark,
  },
  content: {
    paddingBottom: 80,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    fontSize: 26,
    fontWeight: '600',
    color: Colors.primary,
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textDark,
  },
  profileEmail: {
    fontSize: 14,
    color: Colors.textLight,
    marginTop: 4,
  },
  section: {
    marginTop: 24,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  menuIconTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 14,
  },
  menuTitle: {
    fontSize: 16,
    color: Colors.textDark,
  },
  dangerText: {
    color: Colors.danger,
  },
});
