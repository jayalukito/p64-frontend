import React from 'react';
import { Modal, ActivityIndicator, Text } from 'react-native';
import { BlurView } from 'expo-blur';

interface FullScreenLoaderProps {
  visible: boolean;
  message?: string; // Optional message, defaults to "Loading..."
}

export default function FullScreenLoader({ visible, message = 'Loading...' }: FullScreenLoaderProps) {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <BlurView 
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} 
        intensity={40} 
        tint="dark"
      >
        <ActivityIndicator 
          size="large" 
          color="#FFFFFF" 
          style={{ transform: [{ scale: 2 }] }} 
        />
        <Text style={{ color: '#FFF', marginTop: 30, fontSize: 18, fontWeight: 'bold' }}>
          {message}
        </Text>
      </BlurView>
    </Modal>
  );
}