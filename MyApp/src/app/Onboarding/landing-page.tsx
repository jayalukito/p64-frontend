import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#03091F', '#071640', '#081A4C', '#06143A', '#020817']}
        locations={[0, 0.22, 0.48, 0.75, 1]}
        style={styles.container}
      >
        <View style={styles.logoBox}>
          <Text style={styles.logo}>♢</Text>
        </View>

        <Text style={styles.title}>Suraksha SMS</Text>
        <Text style={styles.badge}>Protecting you from SMS scams</Text>

        <Link href="/Onboarding/sign-in" asChild>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryText}>Log In</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/Onboarding/onboarding" asChild>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryText}>♙  Create Account</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.google}>G</Text>
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.apple}></Text>
          <Text style={styles.socialText}>Continue with Apple</Text>
        </TouchableOpacity>

        <Text style={styles.terms}>
          By continuing, you agree to our{'\n'}Terms of Use and Privacy Policy.
        </Text>

        <Text style={styles.privacy}>♙  Your privacy is our priority</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    maxWidth: 390,
    minHeight: 844,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  logoBox: {
    width: 76,
    height: 76,
    borderRadius: 22,
    backgroundColor: '#7447F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
    shadowColor: '#7C3AED',
    shadowOpacity: 0.5,
    shadowRadius: 26,
  },
  logo: {
    color: 'white',
    fontSize: 38,
    fontWeight: '900',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 12,
  },
  badge: {
    color: '#8D98BD',
    backgroundColor: '#13224C',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 7,
    fontSize: 12,
    marginBottom: 36,
  },
  primaryButton: {
    width: '100%',
    height: 56,
    borderRadius: 14,
    backgroundColor: '#7C3AED',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  primaryText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 14,
  },
  arrow: {
    color: 'white',
    fontSize: 24,
  },
  secondaryButton: {
    width: '100%',
    height: 56,
    borderRadius: 14,
    backgroundColor: '#111F44',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#20335F',
    marginBottom: 20,
  },
  secondaryText: {
    color: '#DCE4FF',
    fontWeight: '700',
    fontSize: 13,
  },
  dividerRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#20335F',
  },
  dividerText: {
    color: '#52618A',
    fontSize: 12,
    marginHorizontal: 12,
  },
  socialButton: {
    width: '100%',
    height: 56,
    borderRadius: 14,
    backgroundColor: '#111F44',
    borderWidth: 1,
    borderColor: '#20335F',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  google: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },
  apple: {
    color: 'white',
    fontSize: 20,
  },
  socialText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 13,
  },
  terms: {
    color: '#56658E',
    textAlign: 'center',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 10,
  },
  privacy: {
    color: '#8A63FF',
    fontSize: 12,
    marginTop: 12,
  },
});