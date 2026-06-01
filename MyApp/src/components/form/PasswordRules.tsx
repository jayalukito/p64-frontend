import { View, Text, StyleSheet } from 'react-native';

type Props = {
  password: string;
};

export default function PasswordRules({ password }: Props) {
  const rules = [
    {
      text: 'At least 8 characters',
      complete: password.length >= 8,
    },
    {
      text: 'One uppercase letter',
      complete: /[A-Z]/.test(password),
    },
    {
      text: 'One lowercase letter',
      complete: /[a-z]/.test(password),
    },
    {
      text: 'One number or special character',
      complete: /[\d!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Your password must include:</Text>

      {rules.map((rule) => (
        <View key={rule.text} style={styles.row}>
          <Text style={[styles.icon, rule.complete && styles.iconActive]}>
            {rule.complete ? '✓' : '○'}
          </Text>
          <Text style={styles.text}>{rule.text}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#111F44',
    borderWidth: 1,
    borderColor: '#20335F',
    borderRadius: 14,
    padding: 14,
  },
  title: {
    color: '#DCE4FF',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginBottom: 6,
  },
  icon: {
    color: '#65729A',
    fontSize: 13,
    width: 16,
  },
  iconActive: {
    color: '#22C55E',
  },
  text: {
    color: '#AEB8D6',
    fontSize: 12,
  },
});