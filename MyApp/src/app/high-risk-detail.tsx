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
  id?: string;
  sender?: string;
  time?: string;
  text?: string;
  score?: string;
  risk?: string;
};

export default function HighRiskDetailScreen() {
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
            style={styles.headerButton}
            onPress={() => router.back()}
          >
            <Text style={styles.headerIcon}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Message Details
          </Text>

          <View style={styles.headerButton}>
            <Text style={styles.moreIcon}>⋮</Text>
          </View>
        </View>

        <View style={styles.senderCard}>
          <View style={styles.senderTop}>
            <View style={styles.senderIcon}>
              <Text style={styles.senderIconText}>
                ✉
              </Text>
            </View>

            <View style={styles.senderInfo}>
              <Text style={styles.senderName}>
                {sender}
              </Text>

              <Text style={styles.senderNumber}>
                SMS Message
              </Text>
            </View>

            <View style={styles.timeBadge}>
              <Text style={styles.timeText}>
                {time}
              </Text>
            </View>
          </View>

          <View style={styles.messageBox}>
            <Text style={styles.messageText}>
              {messageText}
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.label}>
                RISK SCORE
              </Text>

              <View style={styles.scoreRow}>
                <Text style={styles.score}>
                  {score}
                </Text>

                <Text style={styles.scoreTotal}>
                  /100
                </Text>
              </View>
            </View>

            <View style={styles.highBadge}>
              <Text style={styles.highBadgeText}>
                ⚠ High Risk
              </Text>
            </View>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${score}%`,
                },
              ]}
            />
          </View>

          <View style={styles.progressLabels}>
            <Text style={styles.progressLabel}>
              0
            </Text>

            <Text style={styles.progressLabel}>
              Safe Zone · 50
            </Text>

            <Text style={styles.progressLabel}>
              100
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              ✥ Detected Signals
            </Text>

            <View style={styles.flagsBadge}>
              <Text style={styles.flagsText}>
                3 Flags
              </Text>
            </View>
          </View>

          <SignalCard
            icon="🔗"
            title="Suspicious Link"
            description="Contains an unverified external URL"
          />

          <SignalCard
            icon="⚡"
            title="Urgent Language"
            description="Uses pressure tactics to force action"
          />

          <SignalCard
            icon="🏦"
            title="Suspicious Sender Pattern"
            description="Matches common scam or impersonation patterns"
          />
        </View>

        <View style={styles.adviceCard}>
          <Text style={styles.adviceTitle}>
            Recommended Action
          </Text>

          <Text style={styles.adviceText}>
            Do not click suspicious links or provide passwords,
            OTPs, banking details, or other personal information.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.reportButton}
          activeOpacity={0.85}
        >
          <Text style={styles.reportButtonText}>
            ⚑ Report Scam
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.safeButton}
          activeOpacity={0.85}
        >
          <Text style={styles.safeButtonText}>
            Mark as Safe
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function SignalCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <View style={styles.signalCard}>
      <View style={styles.signalIcon}>
        <Text>{icon}</Text>
      </View>

      <View style={styles.signalContent}>
        <Text style={styles.signalTitle}>
          {title}
        </Text>

        <Text style={styles.signalDescription}>
          {description}
        </Text>
      </View>
    </View>
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
    paddingTop: 15,
    paddingBottom: 35,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  headerButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#10265D',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerIcon: {
    color: '#FFFFFF',
    fontSize: 25,
  },

  moreIcon: {
    color: '#FFFFFF',
    fontSize: 20,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  senderCard: {
    backgroundColor: '#0D215A',
    borderWidth: 1,
    borderColor: '#183B86',
    borderRadius: 18,
    padding: 14,
    marginBottom: 14,
  },

  senderTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  senderIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#714CF1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  senderIconText: {
    color: '#FFFFFF',
    fontSize: 16,
  },

  senderInfo: {
    flex: 1,
  },

  senderName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  senderNumber: {
    color: '#8491B2',
    fontSize: 10,
    marginTop: 2,
  },

  timeBadge: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#31487C',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  timeText: {
    color: '#8A96B5',
    fontSize: 9,
  },

  messageBox: {
    backgroundColor: '#10265A',
    borderWidth: 1,
    borderColor: '#274786',
    borderRadius: 12,
    padding: 12,
    marginTop: 12,
  },

  messageText: {
    color: '#AEB9D5',
    fontSize: 12,
    lineHeight: 18,
  },

  card: {
    backgroundColor: '#0D215A',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#183B86',
    padding: 15,
    marginBottom: 14,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  label: {
    color: '#8794B4',
    fontSize: 10,
  },

  scoreRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 2,
  },

  score: {
    color: '#FF465E',
    fontSize: 30,
    fontWeight: '800',
  },

  scoreTotal: {
    color: '#7F8BAB',
    fontSize: 13,
    marginBottom: 4,
  },

  highBadge: {
    backgroundColor: '#D93646',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  highBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },

  progressTrack: {
    height: 6,
    backgroundColor: '#182748',
    borderRadius: 10,
    marginTop: 14,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#FF315C',
    borderRadius: 10,
  },

  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },

  progressLabel: {
    color: '#5D6C91',
    fontSize: 8,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  flagsBadge: {
    backgroundColor: '#C84044',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  flagsText: {
    color: '#FFFFFF',
    fontSize: 9,
  },

  signalCard: {
    flexDirection: 'row',
    backgroundColor: '#10265A',
    borderWidth: 1,
    borderColor: '#203F7D',
    borderRadius: 12,
    padding: 11,
    marginTop: 10,
  },

  signalIcon: {
    width: 30,
    height: 30,
    borderRadius: 9,
    backgroundColor: '#311546',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  signalContent: {
    flex: 1,
  },

  signalTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },

  signalDescription: {
    color: '#7786A9',
    fontSize: 9,
    marginTop: 3,
  },

  adviceCard: {
    backgroundColor: '#0D215A',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#183B86',
    padding: 15,
    marginBottom: 14,
  },

  adviceTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  adviceText: {
    color: '#8794B4',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 8,
  },

  reportButton: {
    minHeight: 52,
    borderRadius: 14,
    backgroundColor: '#B51F26',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  reportButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  safeButton: {
    minHeight: 50,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#2C55AD',
    backgroundColor: '#0A1C4A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  safeButtonText: {
    color: '#58B3FF',
    fontSize: 13,
    fontWeight: '600',
  },
});