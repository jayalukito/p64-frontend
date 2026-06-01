import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ShieldVisual() {
  return (
    <View style={styles.visualWrap}>
      <View style={styles.ringLarge} />
      <View style={styles.ringMedium} />
      <View style={styles.ringSmall} />

      <View style={styles.aiBadge}>
        <Text style={styles.aiText}>⌘ AI Bot</Text>
      </View>

      <View style={styles.leftBubble}>
        <Text style={styles.icon}>⌕</Text>
      </View>

      <View style={styles.rightBubble}>
        <Text style={styles.greenIcon}>♧</Text>
      </View>

      <View style={styles.shadowBase} />

      <LinearGradient colors={['#8B5CF6', '#6D28D9']} style={styles.shield}>
        <Text style={styles.check}>✓</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  visualWrap: {
    width: 240,
    height: 230,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringLarge: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: 'rgba(124,58,237,0.14)',
  },
  ringMedium: {
    position: 'absolute',
    width: 172,
    height: 172,
    borderRadius: 86,
    borderWidth: 1,
    borderColor: 'rgba(124,58,237,0.22)',
  },
  ringSmall: {
    position: 'absolute',
    width: 122,
    height: 122,
    borderRadius: 61,
    borderWidth: 1,
    borderColor: 'rgba(124,58,237,0.32)',
  },
  aiBadge: {
    position: 'absolute',
    top: 10,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 18,
    backgroundColor: '#151B50',
    borderWidth: 1,
    borderColor: '#7C3AED',
  },
  aiText: {
    color: '#D8CCFF',
    fontSize: 11,
    fontWeight: '700',
  },
  leftBubble: {
    position: 'absolute',
    left: 8,
    top: 94,
    width: 38,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#121A48',
    borderWidth: 1,
    borderColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightBubble: {
    position: 'absolute',
    right: 8,
    top: 94,
    width: 38,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#121A48',
    borderWidth: 1,
    borderColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#D8CCFF',
  },
  greenIcon: {
    color: '#22C55E',
  },
  shadowBase: {
    position: 'absolute',
    bottom: 38,
    width: 112,
    height: 24,
    borderRadius: 60,
    backgroundColor: 'rgba(124,58,237,0.34)',
    transform: [{ scaleX: 1.4 }],
  },
  shield: {
    width: 92,
    height: 110,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(199,184,255,0.28)',
  },
  check: {
    color: 'white',
    fontSize: 54,
    fontWeight: '900',
  },
});