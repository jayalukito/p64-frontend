import { Link, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

export default function CreateAccountScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumberOrSpecial = /[\d!@#$%^&*(),.?":{}|<>]/.test(password);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleCreateAccount = () => {
    if (!fullName.trim()) {
      Alert.alert('Missing name', 'Please enter your full name.');
      return;
    }

    if (!email.trim() || !emailValid) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
      return;
    }

    if (!hasMinLength || !hasUppercase || !hasLowercase || !hasNumberOrSpecial) {
      Alert.alert('Weak password', 'Please complete all password requirements.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Password mismatch', 'Your passwords do not match.');
      return;
    }

    if (!acceptedTerms) {
      Alert.alert('Terms required', 'Please agree to the Terms of Use and Privacy Policy.');
      return;
    }

    router.push('/Onboarding/allow-access');
  };

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#03091F', '#071640', '#081A4C', '#06143A', '#020817']}
        locations={[0, 0.22, 0.48, 0.75, 1]}
        style={styles.container}
      >
        <Link href="/Onboarding/privacy" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>
        </Link>

        <View style={styles.logoBox}>
          <Text style={styles.logo}>♢</Text>
        </View>

        <Text style={styles.appName}>Suraksha SMS</Text>
        <Text style={styles.title}>Create your account</Text>

        <Text style={styles.subtitle}>
          Join Suraksha SMS and take control of your security and privacy.
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#65729A"
            value={fullName}
            onChangeText={setFullName}
          />

          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#65729A"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#65729A"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#65729A"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.rulesCard}>
          <Text style={styles.rulesTitle}>Your password must include:</Text>
          <Rule complete={hasMinLength} text="At least 8 characters" />
          <Rule complete={hasUppercase} text="One uppercase letter" />
          <Rule complete={hasLowercase} text="One lowercase letter" />
          <Rule complete={hasNumberOrSpecial} text="One number or special character" />
        </View>

        <TouchableOpacity
          style={styles.termsRow}
          onPress={() => setAcceptedTerms(!acceptedTerms)}
          activeOpacity={0.8}
        >
          <View style={[styles.checkbox, acceptedTerms && styles.checkboxActive]}>
            {acceptedTerms && <Text style={styles.checkboxTick}>✓</Text>}
          </View>

          <Text style={styles.termsText}>
            I agree to the <Text style={styles.linkText}>Terms of Use</Text> and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton} onPress={handleCreateAccount}>
          <Text style={styles.primaryText}>Create Account</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>or sign up with</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.google}>G</Text>
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.apple}></Text>
          <Text style={styles.socialText}>Continue with Apple</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Log In</Text>
        </Text>
      </LinearGradient>
    </View>
  );
}

function Rule({ complete, text }: { complete: boolean; text: string }) {
  return (
    <View style={styles.ruleRow}>
      <Text style={[styles.ruleIcon, complete && styles.ruleIconActive]}>
        {complete ? '✓' : '○'}
      </Text>
      <Text style={styles.ruleText}>{text}</Text>
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
    paddingHorizontal: 28,
    paddingTop: 56,
    paddingBottom: 30,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 54,
    left: 26,
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: '#111F44',
    borderWidth: 1,
    borderColor: '#20335F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    color: '#DCE4FF',
    fontSize: 28,
    marginTop: -3,
  },
  logoBox: {
    width: 62,
    height: 62,
    borderRadius: 18,
    backgroundColor: '#7447F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48,
    marginBottom: 10,
    shadowColor: '#7C3AED',
    shadowOpacity: 0.45,
    shadowRadius: 24,
  },
  logo: {
    color: 'white',
    fontSize: 30,
    fontWeight: '900',
  },
  appName: {
    color: 'white',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 8,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#AEB8D6',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    maxWidth: 285,
    marginBottom: 28,
  },
  form: {
    width: '100%',
    gap: 10,
    marginBottom: 14,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    backgroundColor: '#111F44',
    borderWidth: 1,
    borderColor: '#20335F',
    color: 'white',
    paddingHorizontal: 16,
    fontSize: 14,
  },
  rulesCard: {
    width: '100%',
    backgroundColor: '#111F44',
    borderWidth: 1,
    borderColor: '#20335F',
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
  },
  rulesTitle: {
    color: '#DCE4FF',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 10,
  },
  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginBottom: 6,
  },
  ruleIcon: {
    color: '#65729A',
    fontSize: 13,
    width: 16,
  },
  ruleIconActive: {
    color: '#22C55E',
  },
  ruleText: {
    color: '#AEB8D6',
    fontSize: 12,
  },
  termsRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  checkbox: {
    width: 19,
    height: 19,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#52618A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxActive: {
    backgroundColor: '#7C3AED',
    borderColor: '#7C3AED',
  },
  checkboxTick: {
    color: 'white',
    fontSize: 12,
    fontWeight: '900',
  },
  termsText: {
    color: '#7D8CC4',
    fontSize: 11,
    flex: 1,
  },
  linkText: {
    color: '#8B5CF6',
    fontWeight: '700',
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
    marginBottom: 16,
  },
  primaryText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '800',
  },
  arrow: {
    color: 'white',
    fontSize: 22,
  },
  dividerRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#20335F',
  },
  dividerText: {
    color: '#52618A',
    fontSize: 11,
    marginHorizontal: 12,
  },
  socialButton: {
    width: '100%',
    height: 50,
    borderRadius: 13,
    backgroundColor: '#111F44',
    borderWidth: 1,
    borderColor: '#20335F',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  google: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
  },
  apple: {
    color: 'white',
    fontSize: 18,
  },
  socialText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
  loginText: {
    color: '#65729A',
    fontSize: 12,
    marginTop: 4,
  },
  loginLink: {
    color: '#8B5CF6',
    fontWeight: '800',
  },
});