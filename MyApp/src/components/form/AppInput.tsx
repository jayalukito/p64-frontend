import { TextInput, StyleSheet, TextInputProps } from 'react-native';

type Props = TextInputProps;

export default function AppInput(props: Props) {
  return (
    <TextInput
      {...props}
      placeholderTextColor="#65729A"
      style={[styles.input, props.style]}
    />
  );
}

const styles = StyleSheet.create({
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
});