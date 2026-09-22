import { NativeModule, requireNativeModule } from 'expo';

export type SmsMessage = {
  id: string;
  sender: string | null;
  body: string | null;
  date: number;
  read: boolean;
};

declare class SmsReaderModule extends NativeModule<{}> {
  getMessages(limit: number): Promise<SmsMessage[]>;
}

export default requireNativeModule<SmsReaderModule>('SmsReader');