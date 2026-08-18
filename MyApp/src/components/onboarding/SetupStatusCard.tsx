import { View, Text, StyleSheet } from 'react-native';

type Status = 'complete' | 'loading' | 'pending';

const setupItems: { title: string; status: Status }[] = [
  { title: 'Privacy settings secured', status: 'complete' },
  { title: 'On-device scan mode enabled', status: 'complete' },
  { title: 'Calibrating threat detection model', status: 'loading' },
  { title: 'Preparing real-time alerts', status: 'pending' },
];

export default function SetupStatusCard() {
  return (
    <View style={styles.card}>
      {setupItems.map((item, index) => (
        <View key={item.title}>
          <View style={styles.row}>
            <View
              style={[
                styles.statusIcon,
                item.status === 'complete' && styles.complete,
                item.status === 'loading' && styles.loading,
                item.status === 'pending' && styles.pending,
              ]}
            >
              <Text
                style={[
                  styles.symbol,
                  item.status === 'pending' && styles.pendingSymbol,
                ]}
              >
                {item.status === 'complete'
                  ? '✓'
                  : item.status === 'loading'
                    ? '•'
                    : '○'}
              </Text>
            </View>

            <Text style={styles.title}>{item.title}</Text>

            <Text
              style={[
                styles.label,
                item.status === 'complete' && styles.completeLabel,
                item.status === 'loading' && styles.loadingLabel,
                item.status === 'pending' && styles.pendingLabel,
              ]}
            >
              {item.status === 'complete'
                ? 'Done'
                : item.status === 'loading'
                  ? 'In Progress'
                  : 'Pending'}
            </Text>
          </View>

          {index !== setupItems.length - 1 && <View style={styles.divider} />}
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
    minHeight: 62,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  statusIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  complete: {
    borderWidth: 1.5,
    borderColor: '#22C55E',
  },
  loading: {
    backgroundColor: '#7C3AED',
  },
  pending: {
    borderWidth: 1.5,
    borderColor: '#52618A',
  },
  symbol: {
    color: 'white',
    fontSize: 13,
    fontWeight: '900',
  },
  pendingSymbol: {
    color: '#52618A',
  },
  title: {
    flex: 1,
    color: '#D9E0F7',
    fontSize: 12.5,
    fontWeight: '700',
  },
  label: {
    fontSize: 10,
    fontWeight: '800',
  },
  completeLabel: {
    color: '#22C55E',
  },
  loadingLabel: {
    color: '#C7B8FF',
  },
  pendingLabel: {
    color: '#65729A',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(32,51,95,0.7)',
    marginLeft: 52,
  },
});