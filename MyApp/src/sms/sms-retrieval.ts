// services/smsService.ts

import {
  PermissionsAndroid,
  Platform,
} from 'react-native';

import SmsReader, {
  SmsMessage,
} from '../../modules/sms-reader/src/SmsReaderModule';

import {
  MLSmsMessage,
} from '../ml/classifySmsMessages';
export async function requestSmsPermission(): Promise<boolean> {
  if (Platform.OS !== 'android') {
    throw new Error(
      'SMS retrieval is only supported on Android.'
    );
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
}

export async function getSmsMessages(limit = 30): Promise<MLSmsMessage[]> {
  const messages: SmsMessage[] = await SmsReader.getMessages(limit);

  const validMessages: MLSmsMessage[] = messages
    .filter((message) => {
      return (
        typeof message.body === "string" &&
        message.body.trim().length > 0
      );
    })
    .map((message) => ({
      id: String(message.id),
      body: message.body as string,
      date: Number(message.date),
      read: Boolean(message.read),
      sender: message.sender ?? "Unknown",
    }));

  return validMessages;
}