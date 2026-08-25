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

export default function MediumRiskDetailScreen() {
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
            <Text style={styles.statusIcon}>!</Text>
          </View>

          <Text style={styles.statusTitle}>
            Medium Risk
          </Text>

          <Text style={styles.statusDescription}>
            This message contains some suspicious characteristics.
            Review it carefully before taking action.
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
                Medium Risk
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
            Why it needs attention
          </Text>

          <Text style={styles.point}>
            • The sender may not be verified.
          </Text>

          <Text style={styles.point}>
            • The message may contain promotional or urgent wording.
          </Text>

          <Text style={styles.point}>
            • Check the sender before clicking any links.
          </Text>
        </View>

        <TouchableOpacity style={styles.reportButton}>
          <Text style={styles.reportText}>
            Report Scam
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.safeButton}>
          <Text style={styles.safeText}>
            Mark as Safe
          </Text>
        </TouchableOpacity>
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
    marginVertical: 28,
  },

  statusCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#5A4300',
    borderWidth: 2,
    borderColor: '#FFB800',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusIcon: {
    color: '#FFB800',
    fontSize: 30,
    fontWeight: '800',
  },

  statusTitle: {
    color: '#FFB800',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 13,
  },

  statusDescription: {
    color: '#8D9ABC',
    textAlign: 'center',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 7,
    paddingHorizontal: 15,
  },

  card: {
    backgroundColor: '#0D215A',
    borderWidth: 1,
    borderColor: '#2B437A',
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
    backgroundColor: '#493900',
    borderWidth: 1,
    borderColor: '#FFB800',
    borderRadius: 14,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  badgeText: {
    color: '#FFB800',
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
    color: '#FFB800',
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
    backgroundColor: '#FFB800',
    borderRadius: 10,
  },

  point: {
    color: '#9BA8C7',
    fontSize: 11,
    lineHeight: 18,
    marginTop: 9,
  },

  reportButton: {
    minHeight: 50,
    backgroundColor: '#A4232F',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 11,
  },

  reportText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  safeButton: {
    minHeight: 50,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FFB800',
    justifyContent: 'center',
    alignItems: 'center',
  },

  safeText: {
    color: '#FFB800',
    fontSize: 13,
    fontWeight: '700',
  },
});