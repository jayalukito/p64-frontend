import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type SmsMessage = {
  id: string;
  body: string;
  date: number;
  read: boolean;
  sender: string;
};

export type SmsPredictionResult = {
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

export type ClassifiedSmsMessage = SmsMessage & {
  mlResult: SmsPredictionResult;
};

type SmsStore = {
  rawMessages: SmsMessage[];
  classifiedMessages: ClassifiedSmsMessage[];

  setRawMessages: (messages: SmsMessage[]) => void;
  setClassifiedMessages: (messages: ClassifiedSmsMessage[]) => void;

  appendRawMessages: (messages: SmsMessage[]) => void;
  appendClassifiedMessages: (messages: ClassifiedSmsMessage[]) => void;

  clearMessages: () => void;
};

function mergeMessagesById<T extends { id: string }>(
  existingMessages: T[],
  newMessages: T[]
): T[] {
  const messageMap = new Map<string, T>();

  for (const message of existingMessages) {
    messageMap.set(message.id, message);
  }

  for (const message of newMessages) {
    messageMap.set(message.id, message);
  }

  return Array.from(messageMap.values()).sort((a: any, b: any) => {
    return b.date - a.date;
  });
}

export const useSmsStore = create<SmsStore>()(
  persist(
    (set) => ({
      rawMessages: [],
      classifiedMessages: [],

      setRawMessages: (messages) => {
        set({ rawMessages: messages });
      },

      setClassifiedMessages: (messages) => {
        set({ classifiedMessages: messages });
      },

      appendRawMessages: (messages) => {
        set((state) => ({
          rawMessages: mergeMessagesById(state.rawMessages, messages),
        }));
      },

      appendClassifiedMessages: (messages) => {
        set((state) => ({
          classifiedMessages: mergeMessagesById(
            state.classifiedMessages,
            messages
          ),
        }));
      },

      clearMessages: () => {
        set({
          rawMessages: [],
          classifiedMessages: [],
        });
      },
    }),
    {
      name: "sms-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);