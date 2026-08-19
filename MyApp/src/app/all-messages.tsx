import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

/* =========================================================
   TYPES
========================================================= */

type RiskType = 'High Risk' | 'Medium Risk' | 'Safe';

type MessageItem = {
  id: string;
  sender: string;
  time: string;
  text: string;
  risk: RiskType;
  score: number;
};

/* =========================================================
   MOCK MESSAGE DATA
========================================================= */

const messages: MessageItem[] = [
  {
    id: '1',
    sender: 'bKash Alert',
    time: '2 min ago',
    text: 'Your account is locked. Click here to verify now...',
    risk: 'High Risk',
    score: 92,
  },
  {
    id: '2',
    sender: 'Unknown Number',
    time: '10 min ago',
    text: 'You have won a prize! Claim it before it expires...',
    risk: 'Medium Risk',
    score: 65,
  },
  {
    id: '3',
    sender: 'John',
    time: '1 hour ago',
    text: 'Hey, are we still meeting at 5 PM?',
    risk: 'Safe',
    score: 10,
  },
  {
    id: '4',
    sender: 'Bank Security',
    time: '2 hours ago',
    text: 'Unusual activity detected. Verify your account immediately...',
    risk: 'High Risk',
    score: 88,
  },
  {
    id: '5',
    sender: 'Delivery Service',
    time: '3 hours ago',
    text: 'Your package is waiting. Confirm your delivery information...',
    risk: 'Medium Risk',
    score: 58,
  },
  {
    id: '6',
    sender: 'Mum',
    time: '4 hours ago',
    text: 'Call me when you get home.',
    risk: 'Safe',
    score: 5,
  },
  {
    id: '7',
    sender: 'Prize Winner',
    time: 'Yesterday',
    text: 'Congratulations! You have been selected to receive a cash reward...',
    risk: 'High Risk',
    score: 95,
  },
  {
    id: '8',
    sender: 'Unknown Sender',
    time: 'Yesterday',
    text: 'Special offer available today only. Tap here to learn more...',
    risk: 'Medium Risk',
    score: 52,
  },
  {
    id: '9',
    sender: 'Sarah',
    time: 'Yesterday',
    text: 'Are you coming to class tomorrow?',
    risk: 'Safe',
    score: 8,
  },
  {
    id: '10',
    sender: 'University',
    time: '2 days ago',
    text: 'Reminder: Your class begins at 9:30 AM tomorrow.',
    risk: 'Safe',
    score: 3,
  },
];

/* =========================================================
   SCREEN
========================================================= */

export default function AllMessagesScreen() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  /* =======================================================
     SEARCH + FILTER
  ======================================================= */

  const filteredMessages = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return messages.filter((message) => {
      const matchesSearch =
        message.sender.toLowerCase().includes(searchText) ||
        message.text.toLowerCase().includes(searchText);

      let matchesFilter = true;

      if (activeFilter === 'Safe') {
        matchesFilter = message.risk === 'Safe';
      }

      if (activeFilter === 'Medium') {
        matchesFilter = message.risk === 'Medium Risk';
      }

      if (activeFilter === 'High') {
        matchesFilter = message.risk === 'High Risk';
      }

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  /* =======================================================
     RISK COLOURS
  ======================================================= */

  const getRiskColor = (risk: RiskType) => {
    switch (risk) {
      case 'High Risk':
        return '#FF2F68';

      case 'Medium Risk':
        return '#FFB800';

      case 'Safe':
        return '#13D67A';

      default:
        return '#FFFFFF';
    }
  };

  const getRiskBackground = (risk: RiskType) => {
    switch (risk) {
      case 'High Risk':
        return '#341327';

      case 'Medium Risk':
        return '#352804';

      case 'Safe':
        return '#0C3125';

      default:
        return '#0D1B4D';
    }
  };

  /* =======================================================
     UI
  ======================================================= */

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* ================= HEADER ================= */}

        <View style={styles.header}>
          <Text style={styles.title}>
            All Messages
          </Text>

          <Text style={styles.subtitle}>
            View and manage all scanned SMS
          </Text>
        </View>

        {/* ================= SEARCH ================= */}

        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>
            ⌕
          </Text>

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search messages..."
            placeholderTextColor="#7885A9"
            style={styles.searchInput}
          />
        </View>

        {/* ================= FILTERS ================= */}

        <View style={styles.filterRow}>
          {['All', 'Safe', 'Medium', 'High'].map(
            (filter) => {
              const isActive =
                activeFilter === filter;

              return (
                <TouchableOpacity
                  key={filter}
                  activeOpacity={0.8}
                  onPress={() =>
                    setActiveFilter(filter)
                  }
                  style={[
                    styles.filterButton,

                    filter === 'Safe' &&
                      styles.safeFilter,

                    filter === 'Medium' &&
                      styles.mediumFilter,

                    filter === 'High' &&
                      styles.highFilter,

                    isActive &&
                      filter === 'All' &&
                      styles.allFilterActive,

                    isActive &&
                      filter === 'Safe' &&
                      styles.safeFilterActive,

                    isActive &&
                      filter === 'Medium' &&
                      styles.mediumFilterActive,

                    isActive &&
                      filter === 'High' &&
                      styles.highFilterActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.filterText,

                      filter === 'Safe' &&
                        styles.safeText,

                      filter === 'Medium' &&
                        styles.mediumText,

                      filter === 'High' &&
                        styles.highText,

                      isActive &&
                        filter === 'All' &&
                        styles.activeFilterText,
                    ]}
                  >
                    {filter === 'High'
                      ? 'High Risk'
                      : filter}
                  </Text>
                </TouchableOpacity>
              );
            }
          )}
        </View>

        {/* ================= MESSAGES ================= */}

        <View style={styles.messageList}>
          {filteredMessages.map((message) => {
            const riskColor =
              getRiskColor(message.risk);

            const riskBackground =
              getRiskBackground(message.risk);

            return (
              <TouchableOpacity
                key={message.id}
                style={styles.card}
                activeOpacity={0.85}
              >
                {/* CARD HEADER */}

                <View style={styles.cardHeader}>
                  <View style={styles.senderSection}>
                    {/* MESSAGE ICON */}

                    <View
                      style={[
                        styles.messageIconContainer,
                        {
                          backgroundColor:
                            riskBackground,

                          borderColor:
                            riskColor,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.messageIcon,
                          {
                            color:
                              riskColor,
                          },
                        ]}
                      >
                        ✉
                      </Text>
                    </View>

                    {/* SENDER INFORMATION */}

                    <View
                      style={
                        styles.senderTextContainer
                      }
                    >
                      <Text style={styles.sender}>
                        {message.sender}
                      </Text>

                      <Text style={styles.time}>
                        {message.time}
                      </Text>
                    </View>
                  </View>

                  {/* RISK BADGE */}

                  <View
                    style={[
                      styles.riskBadge,
                      {
                        backgroundColor:
                          riskBackground,

                        borderColor:
                          riskColor,
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.riskDot,
                        {
                          backgroundColor:
                            riskColor,
                        },
                      ]}
                    />

                    <Text
                      style={[
                        styles.riskBadgeText,
                        {
                          color:
                            riskColor,
                        },
                      ]}
                    >
                      {message.risk}
                    </Text>
                  </View>
                </View>

                {/* MESSAGE PREVIEW */}

                <Text style={styles.messageText}>
                  {message.text}
                </Text>

                {/* SCORE */}

                <View style={styles.cardBottom}>
                  <View
                    style={styles.progressTrack}
                  >
                    <View
                      style={[
                        styles.progressFill,
                        {
                          width: `${message.score}%`,
                          backgroundColor:
                            riskColor,
                        },
                      ]}
                    />
                  </View>

                  <Text
                    style={[
                      styles.score,
                      {
                        color:
                          riskColor,
                      },
                    ]}
                  >
                    Score: {message.score}/100
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* ================= EMPTY RESULT ================= */}

        {filteredMessages.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>
              ◌
            </Text>

            <Text style={styles.emptyTitle}>
              No messages found
            </Text>

            <Text style={styles.emptyText}>
              Try another search or filter.
            </Text>
          </View>
        )}

        {/* ================= HINT ================= */}

        {filteredMessages.length > 0 && (
          <Text style={styles.tapHint}>
            Tap a message to view full details
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

/* =========================================================
   STYLES
========================================================= */

const styles = StyleSheet.create({
  /* ================= SCREEN ================= */

  safeArea: {
    flex: 1,
    backgroundColor: '#06123D',
  },

  screen: {
    flex: 1,
    backgroundColor: '#06123D',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 35,
  },

  /* ================= HEADER ================= */

  header: {
    marginBottom: 18,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '700',
    letterSpacing: -0.3,
  },

  subtitle: {
    color: '#8C98B9',
    fontSize: 13,
    marginTop: 4,
  },

  /* ================= SEARCH ================= */

  searchContainer: {
    width: '100%',
    minHeight: 48,

    backgroundColor: '#0D1C4B',

    borderWidth: 1,
    borderColor: '#29417D',
    borderRadius: 15,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 14,
  },

  searchIcon: {
    color: '#7E8BB0',
    fontSize: 22,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,

    color: '#FFFFFF',

    fontSize: 14,

    paddingVertical: 12,
  },

  /* ================= FILTERS ================= */

  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    gap: 9,

    marginTop: 15,
    marginBottom: 17,
  },

  filterButton: {
    borderRadius: 18,

    borderWidth: 1,
    borderColor: '#394C83',

    paddingHorizontal: 15,
    paddingVertical: 8,

    backgroundColor: 'transparent',
  },

  allFilterActive: {
    backgroundColor: '#5C47DA',
    borderColor: '#5C47DA',
  },

  safeFilter: {
    borderColor: '#13D67A',
  },

  mediumFilter: {
    borderColor: '#FFB800',
  },

  highFilter: {
    borderColor: '#FF2F68',
  },

  safeFilterActive: {
    backgroundColor: '#0C3125',
  },

  mediumFilterActive: {
    backgroundColor: '#352804',
  },

  highFilterActive: {
    backgroundColor: '#341327',
  },

  filterText: {
    color: '#A1AAC3',

    fontSize: 12,
    fontWeight: '500',
  },

  activeFilterText: {
    color: '#FFFFFF',
  },

  safeText: {
    color: '#13D67A',
  },

  mediumText: {
    color: '#FFB800',
  },

  highText: {
    color: '#FF2F68',
  },

  /* ================= MESSAGE LIST ================= */

  messageList: {
    width: '100%',
  },

  card: {
    width: '100%',

    backgroundColor: '#0D1B4D',

    borderWidth: 1,
    borderColor: '#1B3475',
    borderRadius: 18,

    padding: 15,

    marginBottom: 13,
  },

  /* ================= CARD HEADER ================= */

  cardHeader: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  senderSection: {
    flex: 1,

    flexDirection: 'row',

    paddingRight: 10,
  },

  /* ================= ICON ================= */

  messageIconContainer: {
    width: 38,
    height: 38,

    borderRadius: 19,
    borderWidth: 1,

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 11,
  },

  messageIcon: {
    fontSize: 17,
  },

  /* ================= SENDER ================= */

  senderTextContainer: {
    flexShrink: 1,
  },

  sender: {
    color: '#FFFFFF',

    fontSize: 15,
    fontWeight: '700',
  },

  time: {
    color: '#7C89AD',

    fontSize: 11,

    marginTop: 3,
  },

  /* ================= RISK BADGE ================= */

  riskBadge: {
    flexDirection: 'row',

    alignItems: 'center',

    borderWidth: 1,
    borderRadius: 20,

    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  riskDot: {
    width: 6,
    height: 6,

    borderRadius: 3,

    marginRight: 5,
  },

  riskBadgeText: {
    fontSize: 10,
    fontWeight: '600',
  },

  /* ================= MESSAGE ================= */

  messageText: {
    color: '#AAB4D2',

    fontSize: 13,
    lineHeight: 19,

    marginTop: 14,
  },

  /* ================= SCORE ================= */

  cardBottom: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 13,
  },

  progressTrack: {
    flex: 1,

    height: 6,

    borderRadius: 10,

    backgroundColor: '#13213D',

    overflow: 'hidden',

    marginRight: 18,
  },

  progressFill: {
    height: '100%',

    borderRadius: 10,
  },

  score: {
    fontSize: 11,
    fontWeight: '700',
  },

  /* ================= EMPTY STATE ================= */

  emptyContainer: {
    paddingVertical: 50,

    alignItems: 'center',
  },

  emptyIcon: {
    color: '#566589',

    fontSize: 36,

    marginBottom: 10,
  },

  emptyTitle: {
    color: '#FFFFFF',

    fontSize: 16,
    fontWeight: '600',
  },

  emptyText: {
    color: '#7C89AD',

    fontSize: 13,

    marginTop: 5,
  },

  /* ================= HINT ================= */

  tapHint: {
    color: '#6F7A99',

    textAlign: 'center',

    fontSize: 11,

    marginTop: 4,
    marginBottom: 10,
  },
});