import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function OnboardingScreen() {
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#03091F', '#071640', '#081A4C', '#06143A', '#020817']}
        locations={[0, 0.22, 0.48, 0.75, 1]}
        style={styles.container}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.content}>
            <View style={styles.progress}>
              <View style={styles.dotActive} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>

            <View style={styles.visualWrap}>
              <View style={styles.ringLarge} />
              <View style={styles.ringMedium} />
              <View style={styles.ringSmall} />

              <View style={styles.aiBadge}>
                <Text style={styles.aiText}>⌘ AI Bot</Text>
              </View>

              <View style={styles.sideBubbleLeft}>
                <Text style={styles.sideIcon}>⌕</Text>
              </View>

              <View style={styles.sideBubbleRight}>
                <Text style={styles.greenIcon}>♧</Text>
              </View>

              <View style={styles.shadowBase} />

              <LinearGradient colors={['#8B5CF6', '#6D28D9']} style={styles.shield}>
                <Text style={styles.check}>✓</Text>
              </LinearGradient>
            </View>

            <Text style={styles.pill}>AI POWERED</Text>

            <Text style={styles.title}>AI-Powered Protection</Text>

            <Text style={styles.subtitle}>
              Our smart AI scans and detects suspicious messages in real-time, keeping you one
              step ahead of SMS scams.
            </Text>

            <View style={styles.footer}>
              <Link href="/Onboarding/privacy" asChild>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Next</Text>
                  <Text style={styles.arrow}>→</Text>
                </TouchableOpacity>
              </Link>

              <Link href="/Onboarding/create-account" asChild>
                <TouchableOpacity>
                  <Text style={styles.skip}>Skip for now</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </ScrollView>
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
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    minHeight: 844,
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 88,
    paddingBottom: 46,
  },
  progress: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 34,
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
    backgroundColor: '#8B5CF6',
  },
  visualWrap: {
    width: 240,
    height: 230,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
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
  sideBubbleLeft: {
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
  sideBubbleRight: {
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
  sideIcon: {
    color: '#D8CCFF',
    fontSize: 13,
  },
  greenIcon: {
    color: '#22C55E',
    fontSize: 13,
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
  pill: {
    color: '#C7B8FF',
    borderColor: '#7C3AED',
    borderWidth: 1,
    backgroundColor: 'rgba(25,31,78,0.8)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 11,
    fontWeight: '700',
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
    marginBottom: 34,
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
    backgroundColor: '#8B5CF6',
  },
  footer: {
    width: '100%',
    marginTop: 'auto',
  },
  button: {
    backgroundColor: '#7C3AED',
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