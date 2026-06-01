import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function PrivacyLockVisual() {
  return (
    <View style={styles.visualWrap}>
      <View style={styles.ringLarge} />
      <View style={styles.ringMedium} />
      <View style={styles.ringSmall} />

      <View style={styles.encryptedBadge}>
        <Text style={styles.badgeText}>▣ Encrypted</Text>
      </View>

      <View style={styles.deviceBadge}>
        <Text style={styles.badgeText}>▯ On-Device</Text>
      </View>

      <View style={styles.uploadBadge}>
        <Text style={styles.uploadText}>⌁ No Uploads</Text>
      </View>

      <View style={styles.shadowBase} />

      <LinearGradient colors={['#A78BFA', '#7C3AED']} style={styles.lockBody}>
        <View style={styles.lockShackle} />
        <View style={styles.keyholeCircle} />
        <View style={styles.keyholeStem} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  visualWrap: {
    width: 250,
    height: 235,
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
    width: 174,
    height: 174,
    borderRadius: 87,
    borderWidth: 1,
    borderColor: 'rgba(124,58,237,0.22)',
  },
  ringSmall: {
    position: 'absolute',
    width: 126,
    height: 126,
    borderRadius: 63,
    borderWidth: 1,
    borderColor: 'rgba(124,58,237,0.32)',
  },
  encryptedBadge: {
    position: 'absolute',
    top: 18,
    right: 10,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 18,
    backgroundColor: '#151B50',
    borderWidth: 1,
    borderColor: '#7C3AED',
  },
  deviceBadge: {
    position: 'absolute',
    left: -4,
    top: 104,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 18,
    backgroundColor: '#151B50',
    borderWidth: 1,
    borderColor: '#7C3AED',
  },
  uploadBadge: {
    position: 'absolute',
    right: 8,
    bottom: 44,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 18,
    backgroundColor: '#102441',
    borderWidth: 1,
    borderColor: '#22C55E',
  },
  badgeText: {
    color: '#E5DCFF',
    fontSize: 12,
    fontWeight: '700',
  },
  uploadText: {
    color: '#22C55E',
    fontSize: 12,
    fontWeight: '800',
  },
  shadowBase: {
    position: 'absolute',
    bottom: 48,
    width: 100,
    height: 24,
    borderRadius: 60,
    backgroundColor: 'rgba(124,58,237,0.32)',
    transform: [{ scaleX: 1.55 }],
  },
  lockBody: {
    width: 96,
    height: 96,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  lockShackle: {
    position: 'absolute',
    top: -48,
    width: 58,
    height: 64,
    borderWidth: 9,
    borderBottomWidth: 0,
    borderColor: '#C4B5FD',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  keyholeCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#F4F0FF',
  },
  keyholeStem: {
    width: 9,
    height: 25,
    borderRadius: 8,
    backgroundColor: '#F4F0FF',
    marginTop: -2,
  },
});