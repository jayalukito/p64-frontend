import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  router,
  useLocalSearchParams,
} from 'expo-router';

type MessageParams = {
  sender?: string;
  time?: string;
  text?: string;
  score?: string;
};

export default function SafeMessageDetailScreen() {
  const params = useLocalSearchParams<MessageParams>();

  const sender = params.sender ?? 'Unknown Sender';
  const time = params.time ?? '';
  const messageText =
    params.text ?? 'No message content available.';

  const parsedScore = Number(params.score ?? 0);

  const score = Number.isFinite(parsedScore)
    ? Math.min(Math.max(parsedScore, 0), 100)
    : 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Message Details
          </Text>

          <View style={styles.headerSpace} />
        </View>

        <View style={styles.statusArea}>
          <View style={styles.statusCircle}>
            <Text style={styles.check}>✓</Text>
          </View>

          <Text style={styles.statusTitle}>
            Message Looks Safe
          </Text>

          <Text style={styles.statusDescription}>
            No significant scam indicators were detected in this
            message.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.senderRow}>
            <View>
              <Text style={styles.sender}>
                {sender}
              </Text>

              <Text style={styles.time}>
                {time}
              </Text>
            </View>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                Safe
              </Text>
            </View>
          </View>

          <Text style={styles.messageText}>
            {messageText}
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.scoreRow}>
            <Text style={styles.sectionTitle}>
              Risk Score
            </Text>

            <Text style={styles.score}>
              {score}/100
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                { width: `${score}%` },
              ]}
            />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            Analysis
          </Text>

          <Text style={styles.point}>
            ✓ No suspicious links detected
          </Text>

          <Text style={styles.point}>
            ✓ No urgent scam language detected
          </Text>

          <Text style={styles.point}>
            ✓ Message appears consistent with normal SMS communication
          </Text>
        </View>

        <View style={styles.safeNotice}>
          <Text style={styles.safeNoticeTitle}>
            You're protected
          </Text>

          <Text style={styles.safeNoticeText}>
            Suraksha SMS will continue monitoring your messages
            for suspicious activity.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#07143D',
  },

  screen: {
    flex: 1,
    backgroundColor: '#07143D',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 35,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#10265D',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backText: {
    color: '#FFFFFF',
    fontSize: 25,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  headerSpace: {
    width: 36,
  },

  statusArea: {
    alignItems: 'center',
    marginVertical: 30,
  },

  statusCircle: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: '#0B3C2B',
    borderWidth: 2,
    borderColor: '#13D67A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  check: {
    color: '#13D67A',
    fontSize: 35,
    fontWeight: '800',
  },

  statusTitle: {
    color: '#13D67A',
    fontSize: 21,
    fontWeight: '800',
    marginTop: 14,
  },

  statusDescription: {
    color: '#8D9ABC',
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 17,
    marginTop: 7,
  },

  card: {
    backgroundColor: '#0D215A',
    borderWidth: 1,
    borderColor: '#1D4176',
    borderRadius: 18,
    padding: 15,
    marginBottom: 14,
  },

  senderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sender: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  time: {
    color: '#7F8CAC',
    fontSize: 10,
    marginTop: 3,
  },

  badge: {
    backgroundColor: '#0C3125',
    borderWidth: 1,
    borderColor: '#13D67A',
    borderRadius: 14,
    paddingHorizontal: 11,
    paddingVertical: 5,
  },

  badgeText: {
    color: '#13D67A',
    fontSize: 9,
    fontWeight: '700',
  },

  messageText: {
    color: '#B6C0DA',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 15,
  },

  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  score: {
    color: '#13D67A',
    fontSize: 13,
    fontWeight: '800',
  },

  progressTrack: {
    height: 7,
    borderRadius: 10,
    backgroundColor: '#182748',
    overflow: 'hidden',
    marginTop: 14,
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#13D67A',
    borderRadius: 10,
  },

  point: {
    color: '#9BA8C7',
    fontSize: 11,
    lineHeight: 18,
    marginTop: 9,
  },

  safeNotice: {
    backgroundColor: '#0B3027',
    borderWidth: 1,
    borderColor: '#146B4A',
    borderRadius: 16,
    padding: 15,
  },

  safeNoticeTitle: {
    color: '#13D67A',
    fontSize: 13,
    fontWeight: '700',
  },

  safeNoticeText: {
    color: '#8EB7A8',
    fontSize: 10,
    lineHeight: 16,
    marginTop: 6,
  },
});