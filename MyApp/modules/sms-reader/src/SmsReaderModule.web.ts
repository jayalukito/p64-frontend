import { registerWebModule, NativeModule } from 'expo';

// SmsReaderModule is not available on the web platform.
class SmsReaderModule extends NativeModule<{}> {}

export default registerWebModule(SmsReaderModule, 'SmsReaderModule');
