import { router } from 'expo-router';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import axios from 'axios';
import FullScreenLoader from '@/components/loaders/FullScreenLoader';
import { routes } from "@/constants/routes";
// Import SecureStore or AsyncStorage here if you need to save the login token
import * as SecureStore from 'expo-secure-store';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {

    router.push( routes.home )
    // if (!email.trim()) {
    //   Alert.alert('Email Required', 'Please enter your email address.');
    //   return;
    // }

    // if (!password.trim()) {
    //   Alert.alert('Password Required', 'Please enter your password.');
    //   return;
    // }

    // setIsLoading(true);

    // try {
    //   // 1. Fetch the base URL from your .env file
    //   const apiUrl = process.env.EXPO_PUBLIC_API_URL;
      
    //   // 2. Make the POST request to your backend endpoint (e.g., /auth/login)
    //   const response = await axios.post(`${apiUrl}/auth/login`, {
    //     email: email.trim(),
    //     password: password
    //   });

    //   const user = response.data.data.user;
    //   const accessToken = response.data.data.accessToken;

    //   // 3. Handle successful response (Assuming your backend sends a token)
    //   if (response.data && accessToken) {

    //     console.log('Login successful');
       
    //     // router.push('./home');
    //   } else {
    //     Alert.alert('Error', 'Login failed. Please check your credentials.');
    //   }
      
    // } catch (error: any) {
    //   // 4. Handle errors (e.g., 401 Unauthorized, 500 Server Error)
    //   console.error("Login Error: ", error);
      
    //   // Extract the error message from the backend if it exists
    //   const errorMessage = error.response?.data?.message || 'An error occurred during sign in. Please try again later.';
    //   console.error('Error message:', errorMessage);
    //   Alert.alert('Sign In Failed', errorMessage);
    // } finally {
    //   setIsLoading(false);
    // }
  };
  return (
    <View style={styles.screen}>
      <FullScreenLoader visible={isLoading} message="Authenticating..." />
      <LinearGradient
        colors={['#03091F', '#071640', '#081A4C', '#06143A', '#020817']}
        locations={[0, 0.22, 0.48, 0.75, 1]}
        style={styles.container}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <View style={styles.logoBox}>
          <Text style={styles.logo}>♢</Text>
        </View>

        <Text style={styles.appName}>Suraksha SMS</Text>

        <Text style={styles.title}>Welcome Back</Text>

        <Text style={styles.subtitle}>
          Sign in to continue protecting yourself from SMS scams.
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#65729A"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#65729A"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleSignIn}
        >
          <Text style={styles.primaryText}>Sign In</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialIcon}>G</Text>
          <Text style={styles.socialText}>
            Continue with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialIcon}></Text>
          <Text style={styles.socialText}>
            Continue with Apple
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/onboarding/create-account')}
        >
          <Text style={styles.createAccount}>
            Don't have an account?{' '}
            <Text style={styles.createAccountLink}>
              Create Account
            </Text>
          </Text>
        </TouchableOpacity>
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
    paddingHorizontal: 28,
    justifyContent: 'center',
  },

  backButton: {
    position: 'absolute',
    top: 55,
    left: 28,
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#111F44',
    borderWidth: 1,
    borderColor: '#20335F',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backText: {
    color: 'white',
    fontSize: 24,
  },

  logoBox: {
    width: 76,
    height: 76,
    borderRadius: 22,
    backgroundColor: '#7447F5',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 18,
  },

  logo: {
    color: 'white',
    fontSize: 34,
    fontWeight: '900',
  },

  appName: {
    color: '#AEB8D6',
    textAlign: 'center',
    marginBottom: 8,
  },

  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    color: '#AEB8D6',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },

  form: {
    gap: 14,
    marginBottom: 16,
  },

  input: {
    height: 56,
    borderRadius: 14,
    backgroundColor: '#111F44',
    borderWidth: 1,
    borderColor: '#20335F',
    color: 'white',
    paddingHorizontal: 18,
    fontSize: 14,
  },

  forgotPassword: {
    color: '#8B5CF6',
    textAlign: 'right',
    marginBottom: 24,
    fontWeight: '700',
  },

  primaryButton: {
    height: 56,
    borderRadius: 14,
    backgroundColor: '#7C3AED',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 24,
  },

  primaryText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 15,
  },

  arrow: {
    color: 'white',
    fontSize: 20,
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#20335F',
  },

  dividerText: {
    color: '#65729A',
    marginHorizontal: 12,
    fontSize: 12,
  },

  socialButton: {
    height: 56,
    borderRadius: 14,
    backgroundColor: '#111F44',
    borderWidth: 1,
    borderColor: '#20335F',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10,
  },

  socialIcon: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },

  socialText: {
    color: 'white',
    fontWeight: '700',
  },

  createAccount: {
    textAlign: 'center',
    marginTop: 20,
    color: '#8D98BD',
  },

  createAccountLink: {
    color: '#8B5CF6',
    fontWeight: '800',
  },
});