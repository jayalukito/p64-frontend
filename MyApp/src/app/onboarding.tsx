import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function OnboardingScreen() {
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
          <View style={styles.dotActive} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.visualWrap}>
          <View style={styles.ringOne} />
          <View style={styles.ringTwo} />
          <View style={styles.ringThree} />

          <View style={styles.aiBotBadge}>
            <Text style={styles.aiBotText}>⌘ AI Bot</Text>
          </View>

          <View style={styles.chatBubble}>
            <Text style={styles.smallIcon}>⌕</Text>
          </View>

          <View style={styles.bellBubble}>
            <Text style={styles.smallIcon}>♧</Text>
          </View>

          <View style={styles.shadowBase} />

          <LinearGradient
            colors={['#8B5CF6', '#6D28D9']}
            style={styles.shield}
          >
            <Text style={styles.icon}>✓</Text>
          </LinearGradient>
        </View>

        <Text style={styles.badge}>AI POWERED</Text>

        <Text style={styles.title}>AI-Powered Protection</Text>

        <Text style={styles.subtitle}>
          Our smart AI scans and detects suspicious messages in real-time, keeping you one step
          ahead of SMS scams.
        </Text>

        <View style={styles.bottomDots}>
          <View style={styles.smallDotActive} />
          <View style={styles.smallDot} />
          <View style={styles.smallDot} />
        </View>

        <Link href={{ pathname: '/privacy' as any }} asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        </Link>

        <Text style={styles.skip}>Skip for now</Text>
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
    paddingBottom: 48,
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
    marginBottom: 30,
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
    backgroundColor: '#A100FF',
  },
  visualWrap: {
    width: 230,
    height: 230,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  ringOne: {
    position: 'absolute',
    width: 210,
    height: 210,
    borderRadius: 105,
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.16)',
  },
  ringTwo: {
    position: 'absolute',
    width: 164,
    height: 164,
    borderRadius: 82,
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.22)',
  },
  ringThree: {
    position: 'absolute',
    width: 116,
    height: 116,
    borderRadius: 58,
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.30)',
  },
  aiBotBadge: {
    position: 'absolute',
    top: 18,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 18,
    backgroundColor: '#151B50',
    borderWidth: 1,
    borderColor: '#7C3AED',
  },
  aiBotText: {
    color: '#D8CCFF',
    fontSize: 11,
    fontWeight: '600',
  },
  chatBubble: {
    position: 'absolute',
    left: 8,
    top: 98,
    width: 34,
    height: 30,
    borderRadius: 14,
    backgroundColor: '#121A48',
    borderWidth: 1,
    borderColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#7C3AED',
    shadowOpacity: 0.6,
    shadowRadius: 12,
  },
  bellBubble: {
    position: 'absolute',
    right: 8,
    top: 98,
    width: 34,
    height: 30,
    borderRadius: 14,
    backgroundColor: '#121A48',
    borderWidth: 1,
    borderColor: '#00C853',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#00C853',
    shadowOpacity: 0.35,
    shadowRadius: 10,
  },
  smallIcon: {
    color: '#D8CCFF',
    fontSize: 13,
  },
  shadowBase: {
    position: 'absolute',
    bottom: 35,
    width: 110,
    height: 26,
    borderRadius: 60,
    backgroundColor: 'rgba(124, 58, 237, 0.34)',
    transform: [{ scaleX: 1.4 }],
  },
  shield: {
    width: 92,
    height: 110,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8B5CF6',
    shadowOpacity: 0.7,
    shadowRadius: 24,
    borderWidth: 2,
    borderColor: 'rgba(199, 184, 255, 0.28)',
  },
  icon: {
    color: 'white',
    fontSize: 54,
    fontWeight: '800',
  },
  badge: {
    color: '#C7B8FF',
    borderColor: '#7C3AED',
    borderWidth: 1,
    backgroundColor: 'rgba(25, 31, 78, 0.8)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 11,
    marginBottom: 18,
  },
  title: {
    color: 'white',
    fontSize: 27,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 14,
  },
  subtitle: {
    color: '#AEB8D6',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    maxWidth: 290,
    marginBottom: 20,
  },
  bottomDots: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 92,
  },
  smallDot: {
    width: 7,
    height: 5,
    borderRadius: 8,
    backgroundColor: '#31416D',
  },
  smallDotActive: {
    width: 18,
    height: 5,
    borderRadius: 8,
    backgroundColor: '#A100FF',
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
  },
});