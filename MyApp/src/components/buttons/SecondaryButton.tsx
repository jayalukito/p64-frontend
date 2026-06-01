import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  onPress?: () => void;
};

export default function SecondaryButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.85}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    borderRadius: 14,
    backgroundColor: '#111F44',
    borderWidth: 1,
    borderColor: '#20335F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#DCE4FF',
    fontSize: 13,
    fontWeight: '700',
  },
});