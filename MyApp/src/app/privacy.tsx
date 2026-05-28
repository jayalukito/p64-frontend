import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PrivacyScreen() {
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#03091F', '#071640', '#081A4C', '#06143A', '#020817']}
        locations={[0, 0.22, 0.48, 0.75, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.container}
      >
        <LinearGradient
          colors={[
            'rgba(113, 76, 255, 0)',
            'rgba(113, 76, 255, 0.10)',
            'rgba(74, 118, 255, 0.08)',
            'rgba(113, 76, 255, 0)',
          ]}
          locations={[0, 0.35, 0.62, 1]}
          start={{ x: 0.2, y: 0 }}
          end={{ x: 0.8, y: 1 }}
          style={styles.softShine}
        />

        <View style={styles.progress}>
          <View style={styles.dot} />
          <View style={styles.dotActive} />
          <View style={styles.dot} />
        </View>

        <View style={styles.visualWrap}>
          <View style={styles.ringOne} />
          <View style={styles.ringTwo} />
          <View style={styles.ringThree} />

          <View style={styles.encryptedBadge}>
            <Text style={styles.badgeText}>▣  Encrypted</Text>
          </View>

          <View style={styles.onDeviceBadge}>
            <Text style={styles.badgeText}>▯  On-Device</Text>
          </View>

          <View style={styles.uploadBadge}>
            <Text style={styles.uploadText}>⌁  No Uploads</Text>
          </View>

          <View style={styles.shadowBase} />

          <LinearGradient colors={['#A78BFA', '#7C3AED']} style={styles.lockBody}>
            <View style={styles.lockShackle} />
            <View style={styles.keyholeCircle} />
            <View style={styles.keyholeStem} />
          </LinearGradient>
        </View>

        <Text style={styles.pill}>PRIVACY FIRST</Text>

        <Text style={styles.title}>Your Privacy Matters</Text>

        <Text style={styles.subtitle}>
          All message analysis happens on your device.{'\n'}
          Your data never leaves your phone.
        </Text>

        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.listText}>Zero data collection</Text>
          </View>

          <View style={styles.listItem}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.listText}>Works fully offline</Text>
          </View>

          <View style={styles.listItem}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.listText}>No third-party sharing</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Link href={{ pathname: '/create-account' as any }} asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
              <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>
          </Link>

          <Text style={styles.skip}>Skip for now</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    maxWidth: 390,
    minHeight: 844,
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 92,
    paddingBottom: 40,
    overflow: 'hidden',
  },
  softShine: {
    position: 'absolute',
    top: -50,
    left: -50,
    width: 490,
    height: 980,
    opacity: 1,
    transform: [{ rotate: '8deg' }],
  },
  progress: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 40,
  },
  dot: {
    width: 28,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#20345E',
  },
  dotActive: {
    width: 28,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#7C3AED',
  },
  visualWrap: {
    width: 250,
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  ringOne: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.16)',
  },
  ringTwo: {
    position: 'absolute',
    width: 174,
    height: 174,
    borderRadius: 87,
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.22)',
  },
  ringThree: {
    position: 'absolute',
    width: 126,
    height: 126,
    borderRadius: 63,
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.30)',
  },
  encryptedBadge: {
    position: 'absolute',
    top: 18,
    right: 14,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 18,
    backgroundColor: '#151B50',
    borderWidth: 1,
    borderColor: '#7C3AED',
  },
  onDeviceBadge: {
    position: 'absolute',
    left: -6,
    top: 108,
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
    bottom: 46,
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
    fontWeight: '600',
  },
  uploadText: {
    color: '#22C55E',
    fontSize: 12,
    fontWeight: '700',
  },
  shadowBase: {
    position: 'absolute',
    bottom: 50,
    width: 100,
    height: 24,
    borderRadius: 60,
    backgroundColor: 'rgba(124, 58, 237, 0.32)',
    transform: [{ scaleX: 1.55 }],
  },
  lockBody: {
    width: 96,
    height: 96,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    shadowColor: '#8B5CF6',
    shadowOpacity: 0.7,
    shadowRadius: 24,
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
  pill: {
    color: '#C7B8FF',
    borderColor: '#7C3AED',
    borderWidth: 1,
    backgroundColor: 'rgba(25, 31, 78, 0.8)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 16,
  },
  title: {
    color: 'white',
    fontSize: 27,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    color: '#AEB8D6',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 28,
  },
  list: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    gap: 14,
    marginBottom: 48,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  check: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#22C55E',
    color: '#22C55E',
    textAlign: 'center',
    lineHeight: 18,
    fontSize: 13,
    fontWeight: '900',
  },
  listText: {
    color: '#D9E0F7',
    fontSize: 15,
  },
  footer: {
    width: '100%',
    marginTop: 'auto',
  },
  button: {
    backgroundColor: '#8B00FF',
    width: '100%',
    height: 56,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
  },
  arrow: {
    color: 'white',
    fontSize: 20,
  },
  skip: {
    color: '#7D8CC4',
    fontSize: 13,
    textAlign: 'center',
  },
});