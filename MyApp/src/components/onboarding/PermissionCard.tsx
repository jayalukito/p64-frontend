import { View, Text, StyleSheet } from 'react-native';

const permissions = [
  {
    icon: '▱',
    title: 'SMS Access',
    description: 'Read incoming SMS for scam detection',
  },
  {
    icon: '♧',
    title: 'Alerts',
    description: 'Show real-time scam alerts',
  },
  {
    icon: '⌁',
    title: 'Background Activity',
    description: 'Monitor messages in the background',
  },
  {
    icon: '◇',
    title: 'Data Safety',
    description: 'Keep your data secure on your device',
  },
];

export default function PermissionCard() {
  return (
    <View style={styles.card}>
      {permissions.map((item, index) => (
        <View key={item.title}>
          <View style={styles.row}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>

            <View style={styles.textWrap}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>

            <View style={styles.checkCircle}>
              <Text style={styles.check}>✓</Text>
            </View>
          </View>

          {index !== permissions.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#111F44',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#20335F',
    overflow: 'hidden',
  },
  row: {
    minHeight: 74,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  iconBox: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#172857',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  icon: {
    color: '#8B5CF6',
    fontSize: 16,
    fontWeight: '800',
  },
  textWrap: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 4,
  },
  description: {
    color: '#8D98BD',
    fontSize: 10.5,
  },
  checkCircle: {
    width: 17,
    height: 17,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    color: '#22C55E',
    fontSize: 10,
    fontWeight: '900',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(32,51,95,0.7)',
    marginLeft: 64,
  },
});