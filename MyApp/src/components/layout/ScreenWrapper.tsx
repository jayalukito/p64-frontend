import { ReactNode } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

type Props = {
  children: ReactNode;
  scroll?: boolean;
};

export default function ScreenWrapper({ children, scroll = false }: Props) {
  if (scroll) {
    return (
      <View style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {children}
        </ScrollView>
      </View>
    );
  }

  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    maxWidth: 390,
    alignSelf: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingVertical: 40,
  },
});