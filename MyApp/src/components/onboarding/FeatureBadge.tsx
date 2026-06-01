import { Text, StyleSheet } from 'react-native';

type Props = {
  label: string;
  variant?: 'purple' | 'green';
};

export default function FeatureBadge({ label, variant = 'purple' }: Props) {
  return (
    <Text style={[styles.badge, variant === 'green' && styles.greenBadge]}>
      {label}
    </Text>
  );
}

const styles = StyleSheet.create({
  badge: {
    color: '#C7B8FF',
    borderColor: '#7C3AED',
    borderWidth: 1,
    backgroundColor: 'rgba(25,31,78,0.8)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 11,
    fontWeight: '700',
    overflow: 'hidden',
  },
  greenBadge: {
    color: '#22C55E',
    borderColor: '#22C55E',
    backgroundColor: '#102441',
  },
});