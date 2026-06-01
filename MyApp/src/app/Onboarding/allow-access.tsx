import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function AllowAccessScreen() {
  const handleAllowAccess = () => {
    router.push('/Onboarding/setup');
  };

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
            <View style={styles.logoGlow}>
              <View style={styles.logoCircle}>
                <Text style={styles.logo}>♢</Text>
              </View>
            </View>

            <Text style={styles.title}>Allow Access</Text>

            <Text style={styles.subtitle}>
              To protect you from scam messages,{'\n'}
              we need the following permissions.
            </Text>

            <View style={styles.permissionCard}>
              <PermissionRow
                icon="▱"
                title="SMS Access"
                description="Read incoming SMS for scam detection"
              />

              <View style={styles.divider} />

              <PermissionRow
                icon="♧"
                title="Alerts"
                description="Show real-time scam alerts"
              />

              <View style={styles.divider} />

              <PermissionRow
                icon="⌁"
                title="Background Activity"
                description="Monitor messages in the background"
              />

              <View style={styles.divider} />

              <PermissionRow
                icon="◇"
                title="Data Safety"
                description="Keep your data secure on your device"
              />
            </View>

            <View style={styles.footer}>
              <TouchableOpacity style={styles.primaryButton} onPress={handleAllowAccess}>
                <Text style={styles.buttonIcon}>♢</Text>
                <Text style={styles.primaryText}>Allow Access</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('/Onboarding/setup')}>
                <Text style={styles.notNow}>Not Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

function PermissionRow({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <View style={styles.permissionRow}>
      <View style={styles.iconBox}>
        <Text style={styles.permissionIcon}>{icon}</Text>
      </View>

      <View style={styles.permissionTextWrap}>
        <Text style={styles.permissionTitle}>{title}</Text>
        <Text style={styles.permissionDescription}>{description}</Text>
      </View>

      <View style={styles.checkCircle}>
        <Text style={styles.check}>✓</Text>
      </View>
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
    paddingHorizontal: 42,
    paddingTop: 132,
    paddingBottom: 42,
  },
  logoGlow: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: 'rgba(124, 58, 237, 0.18)',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 44,
  },
  logoCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#7C3AED',
    shadowOpacity: 0.55,
    shadowRadius: 20,
  },
  logo: {
    color: 'white',
    fontSize: 30,
    fontWeight: '900',
  },
  title: {
    color: 'white',
    fontSize: 29,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 14,
  },
  subtitle: {
    color: '#AEB8D6',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 34,
  },
  permissionCard: {
    width: '100%',
    backgroundColor: '#111F44',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#20335F',
    overflow: 'hidden',
    marginBottom: 26,
  },
  permissionRow: {
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
  permissionIcon: {
    color: '#8B5CF6',
    fontSize: 16,
    fontWeight: '800',
  },
  permissionTextWrap: {
    flex: 1,
  },
  permissionTitle: {
    color: 'white',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 4,
  },
  permissionDescription: {
    color: '#8D98BD',
    fontSize: 10.5,
    lineHeight: 14,
  },
  checkCircle: {
    width: 17,
    height: 17,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  check: {
    color: '#22C55E',
    fontSize: 10,
    fontWeight: '900',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(32, 51, 95, 0.7)',
    marginLeft: 64,
  },
  footer: {
    width: '100%',
    marginTop: 'auto',
  },
  primaryButton: {
    width: '100%',
    height: 56,
    borderRadius: 14,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 9,
    marginBottom: 18,
    shadowColor: '#7C3AED',
    shadowOpacity: 0.45,
    shadowRadius: 18,
  },
  buttonIcon: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
  },
  primaryText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '900',
  },
  notNow: {
    color: '#7D8CC4',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
});