import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors } from '@/constants/colours';

const SETTINGS_STORAGE_KEY = '@suraksha_sms_settings';

type DetectionSensitivity = 'Low' | 'Balanced' | 'High';

type StoredSettings = {
  aiProtection: boolean;
  notifications: boolean;
  sensitivity: DetectionSensitivity;
};

export default function SettingsScreen() {
  const [aiProtection, setAiProtection] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const [sensitivity, setSensitivity] =
    useState<DetectionSensitivity>('Balanced');

  const [settingsLoaded, setSettingsLoaded] = useState(false);

  // Load saved settings when the Settings screen opens
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const savedSettings = await AsyncStorage.getItem(
          SETTINGS_STORAGE_KEY
        );

        if (savedSettings !== null) {
          const parsedSettings: StoredSettings =
            JSON.parse(savedSettings);

          setAiProtection(parsedSettings.aiProtection);
          setNotifications(parsedSettings.notifications);
          setSensitivity(parsedSettings.sensitivity);
        }
      } catch (error) {
        console.error('Failed to load settings:', error);
      } finally {
        setSettingsLoaded(true);
      }
    };

    loadSettings();
  }, []);

  // Save all settings together in AsyncStorage
  const saveSettings = async (
    updatedSettings: StoredSettings
  ) => {
    try {
      await AsyncStorage.setItem(
        SETTINGS_STORAGE_KEY,
        JSON.stringify(updatedSettings)
      );
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  };

  const handleAiProtectionChange = async (
    value: boolean
  ) => {
    setAiProtection(value);

    await saveSettings({
      aiProtection: value,
      notifications,
      sensitivity,
    });
  };

  const handleNotificationsChange = async (
    value: boolean
  ) => {
    setNotifications(value);

    await saveSettings({
      aiProtection,
      notifications: value,
      sensitivity,
    });
  };

  const handleSensitivityChange = async (
    value: DetectionSensitivity
  ) => {
    setSensitivity(value);

    await saveSettings({
      aiProtection,
      notifications,
      sensitivity: value,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Settings</Text>

        <Text style={styles.sectionTitle}>PROTECTION</Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.rowTitle}>
                AI Protection
              </Text>

              <Text style={styles.rowDescription}>
                Automatically detect suspicious messages
              </Text>
            </View>

            <Switch
              value={aiProtection}
              onValueChange={handleAiProtectionChange}
              disabled={!settingsLoaded}
              trackColor={{
                false: colors.border,
                true: colors.purple,
              }}
              thumbColor={colors.white}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.rowTitle}>
                Notifications
              </Text>

              <Text style={styles.rowDescription}>
                Receive alerts for suspicious messages
              </Text>
            </View>

            <Switch
              value={notifications}
              onValueChange={handleNotificationsChange}
              disabled={!settingsLoaded}
              trackColor={{
                false: colors.border,
                true: colors.purple,
              }}
              thumbColor={colors.white}
            />
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          DETECTION SENSITIVITY
        </Text>

        <View style={styles.segmentContainer}>
          {(
            ['Low', 'Balanced', 'High'] as DetectionSensitivity[]
          ).map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.segment,
                sensitivity === option &&
                  styles.segmentActive,
              ]}
              onPress={() =>
                handleSensitivityChange(option)
              }
              disabled={!settingsLoaded}
            >
              <Text
                style={[
                  styles.segmentText,
                  sensitivity === option &&
                    styles.segmentTextActive,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.helperText}>
          Balanced provides the recommended level of
          protection.
        </Text>

        <Text style={styles.sectionTitle}>GENERAL</Text>

        <View style={styles.card}>
          <TouchableOpacity style={styles.navigationRow}>
            <Text style={styles.rowTitle}>Language</Text>

            <View style={styles.navigationValue}>
              <Text style={styles.valueText}>English</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.navigationRow}>
            <Text style={styles.rowTitle}>Appearance</Text>

            <View style={styles.navigationValue}>
              <Text style={styles.valueText}>System</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>
          PRIVACY & SECURITY
        </Text>

        <View style={styles.card}>
          <TouchableOpacity style={styles.navigationRow}>
            <Text style={styles.rowTitle}>Privacy</Text>

            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.navigationRow}>
            <Text style={styles.rowTitle}>Permissions</Text>

            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>ABOUT</Text>

        <View style={styles.card}>
          <TouchableOpacity style={styles.navigationRow}>
            <Text style={styles.rowTitle}>
              About Suraksha-SMS
            </Text>

            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.navigationRow}>
            <Text style={styles.rowTitle}>
              Help & Support
            </Text>

            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <View style={styles.navigationRow}>
            <Text style={styles.rowTitle}>Version</Text>
            <Text style={styles.valueText}>1.0.0</Text>
          </View>
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },

  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 30,
  },

  sectionTitle: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 10,
    marginTop: 22,
  },

  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },

  row: {
    minHeight: 76,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rowText: {
    flex: 1,
    paddingRight: 16,
  },

  rowTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '500',
  },

  rowDescription: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginLeft: 16,
  },

  segmentContainer: {
    flexDirection: 'row',
    backgroundColor: colors.cardDark,
    borderRadius: 12,
    padding: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },

  segment: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 11,
    borderRadius: 9,
  },

  segmentActive: {
    backgroundColor: colors.purple,
  },

  segmentText: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },

  segmentTextActive: {
    color: colors.white,
  },

  helperText: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 8,
    lineHeight: 18,
  },

  navigationRow: {
    minHeight: 58,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  navigationValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  valueText: {
    color: colors.textSecondary,
    fontSize: 14,
  },

  chevron: {
    color: colors.textMuted,
    fontSize: 26,
    marginLeft: 8,
  },

  bottomSpacing: {
    height: 40,
  },
});