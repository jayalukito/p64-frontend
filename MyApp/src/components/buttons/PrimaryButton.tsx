import { ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  onPress?: () => void;
  rightIcon?: ReactNode;
};

export default function PrimaryButton({ title, onPress, rightIcon }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.85}>
      <Text style={styles.text}>{title}</Text>
      {rightIcon ?? <Text style={styles.arrow}>→</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    borderRadius: 14,
    backgroundColor: '#7C3AED',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
  },
  arrow: {
    color: 'white',
    fontSize: 22,
  },
});