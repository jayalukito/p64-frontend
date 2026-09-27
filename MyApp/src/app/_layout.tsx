import {
  DarkTheme,
  Stack,
  ThemeProvider,
} from 'expo-router';

import GradientBackground from '@/components/layout/GradientBackground';

const TransparentTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: 'transparent',
    card: 'transparent',
  },
};

export default function RootLayout() {
  return (
    <GradientBackground>
      <ThemeProvider value={TransparentTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
      </ThemeProvider>
    </GradientBackground>
  );
}