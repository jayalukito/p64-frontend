import { useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  PermissionsAndroid,
  Platform,
  StyleSheet,
} from 'react-native';

import SmsReader, {
  SmsMessage,
} from '../../modules/sms-reader/src/SmsReaderModule';

export default function SmsTestScreen() {
  const [messages, setMessages] = useState<SmsMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const requestSmsPermission = async () => {
    if (Platform.OS !== 'android') {
      setError('SMS retrieval is only supported on Android.');
      return false;
    }

    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_SMS,
      {
        title: 'SMS Access',
        message:
          'Suraksha-SMS needs access to your SMS messages so it can analyse them for potential smishing threats.',
        buttonPositive: 'Allow',
        buttonNegative: 'Deny',
      }
    );

    return result === PermissionsAndroid.RESULTS.GRANTED;
  };

  const loadMessages = async () => {
    try {
      setError(null);

      const granted = await requestSmsPermission();

      if (!granted) {
        setError('SMS permission was not granted.');
        return;
      }

      const result = await SmsReader.getMessages(20);

      setMessages(result);
    } catch (err: any) {
      console.error(err);

      setError(
        err?.message ??
          'Unable to retrieve SMS messages.'
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Suraksha SMS Retrieval Test
      </Text>

      <Button
        title="Load SMS Messages"
        onPress={loadMessages}
      />

      {error && (
        <Text style={styles.error}>
          {error}
        </Text>
      )}

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text style={styles.sender}>
              {item.sender ?? 'Unknown sender'}
            </Text>

            <Text>
              {item.body ?? 'No message body'}
            </Text>

            <Text style={styles.date}>
              {new Date(item.date).toLocaleString()}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },

  error: {
    marginTop: 15,
  },

  message: {
    paddingVertical: 15,
    borderBottomWidth: 1,
  },

  sender: {
    fontWeight: '600',
    marginBottom: 5,
  },

  date: {
    marginTop: 5,
    fontSize: 12,
  },
});