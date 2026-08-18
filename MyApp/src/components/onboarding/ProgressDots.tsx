import { View, StyleSheet } from 'react-native';

type Props = {
  activeIndex: number;
  total?: number;
};

export default function ProgressDots({ activeIndex, total = 3 }: Props) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[styles.dot, index === activeIndex && styles.activeDot]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 28,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#20345E',
  },
  activeDot: {
    backgroundColor: '#8B5CF6',
  },
});