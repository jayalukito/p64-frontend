import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.dots}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.activeDot} />
      </View>

      <View style={styles.logoBox}>
        <Text style={styles.logo}>🛡️</Text>
      </View>

      <Text style={styles.title}>Suraksha SMS</Text>
      <Text style={styles.badge}>Protecting you from SMS scams</Text>

      <Link href={{ pathname: "/onboarding" }} asChild>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryText}>Log In →</Text>
        </TouchableOpacity>
      </Link>

      <Link href={{ pathname: "/onboarding" }} asChild>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>Create Account</Text>
        </TouchableOpacity>
      </Link>

      <Text style={styles.divider}>or continue with</Text>

      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.secondaryText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.secondaryText}>Continue with Apple</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Your privacy is our priority</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06143A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
  },
  dots: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 32,
  },
  dot: {
    width: 28,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#1F315F',
  },
  activeDot: {
    width: 28,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#7C3AED',
  },
  logoBox: {
    width: 92,
    height: 92,
    borderRadius: 24,
    backgroundColor: '#7447F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },
  logo: {
    fontSize: 38,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 10,
  },
  badge: {
    color: '#9EA9CC',
    backgroundColor: '#101E45',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 42,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#7C3AED',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 14,
  },
  primaryText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 16,
  },
  secondaryButton: {
    width: '100%',
    backgroundColor: '#111F44',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#1F315F',
  },
  socialButton: {
    width: '100%',
    backgroundColor: '#111F44',
    paddingVertical: 17,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1F315F',
  },
  secondaryText: {
    color: 'white',
    fontWeight: '700',
  },
  divider: {
    color: '#526188',
    marginBottom: 14,
  },
  footer: {
    color: '#7F8BC0',
    marginTop: 16,
    fontSize: 13,
  },
});