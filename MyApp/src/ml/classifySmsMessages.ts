import { predictSms } from "./smishingModel";

export type MLSmsMessage = {
  id: string;
  body: string ;
  date: number;
  read: boolean;
  sender: string;
};

export type ClassifiedSmsMessage = MLSmsMessage & {
  mlResult: {
    label: "normal" | "promo" | "smish";
    cleanedText: string;
    dangerScore: number;
    confidence: number;
    probabilities: {
      normal: number;
      promo: number;
      smish: number;
    };
  };
};

export async function classifySmsMessage(
  sms: MLSmsMessage
): Promise<ClassifiedSmsMessage> {
  const prediction = await predictSms(sms.body);

  return {
    ...sms,
    mlResult: prediction,
  };
}

export async function classifySmsMessages(
  messages: MLSmsMessage[]
): Promise<ClassifiedSmsMessage[]> {
  const classifiedMessages: ClassifiedSmsMessage[] = [];

  for (const sms of messages) {
    const classifiedSms = await classifySmsMessage(sms);
    classifiedMessages.push(classifiedSms);
  }

  
  return classifiedMessages;
}