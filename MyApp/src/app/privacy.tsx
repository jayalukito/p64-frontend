import { View, Text, StyleSheet } from 'react-native';

export default function PrivacyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy First</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07163B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
  },
});