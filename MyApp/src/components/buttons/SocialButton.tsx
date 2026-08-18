import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  provider: 'Google' | 'Apple';
  onPress?: () => void;
};

export default function SocialButton({ provider, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.85}>
      <Text style={styles.icon}>{provider === 'Apple' ? '' : 'G'}</Text>
      <Text style={styles.text}>Continue with {provider}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 52,
    borderRadius: 14,
    backgroundColor: '#111F44',
    borderWidth: 1,
    borderColor: '#20335F',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
  text: {
    color: 'white',
    fontSize: 13,
    fontWeight: '700',
  },
});