import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../provider/AuthProvider';  // ✅ use the new hook

const HomeScreen = () => {
    const { logout } = useAuth();  // ✅ grab signup from context

    const handleLogout = async () => {
      try {
        await logout();
        Alert.alert('Success', 'You have logged out.');
      } catch (error: any) {
        Alert.alert('Error', error.message || 'Failed');
      }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>You are logged in! 🚀</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};
// Styles remain the same
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 20 },
});

export default HomeScreen;