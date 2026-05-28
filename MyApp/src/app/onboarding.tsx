import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <View style={styles.dotActive} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <View style={styles.iconCircle}>
        <Text style={styles.icon}>✓</Text>
      </View>

      <Text style={styles.badge}>AI POWERED</Text>

      <Text style={styles.title}>AI-Powered Protection</Text>

      <Text style={styles.subtitle}>
        Our smart AI scans and detects suspicious messages in real-time, keeping you one step ahead of SMS scams.
      </Text>

      <Link href={{ pathname: "/privacy" as any }} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next →</Text>
        </TouchableOpacity>
      </Link>

      <Text style={styles.skip}>Skip for now</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07163B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
  },
  progress: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 40,
  },
  dot: {
    width: 28,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#23345F',
  },
  dotActive: {
    width: 28,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#7C3AED',
  },
  iconCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#6D3FEF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
    shadowColor: '#7C3AED',
    shadowOpacity: 0.6,
    shadowRadius: 20,
  },
  icon: {
    color: 'white',
    fontSize: 56,
    fontWeight: 'bold',
  },
  badge: {
    color: '#C7B8FF',
    borderColor: '#6D3FEF',
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 11,
    marginBottom: 16,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 14,
  },
  subtitle: {
    color: '#AEB8D6',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 80,
  },
  button: {
    backgroundColor: '#7C3AED',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 18,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  skip: {
    color: '#7D8CC4',
    fontSize: 14,
  },
});