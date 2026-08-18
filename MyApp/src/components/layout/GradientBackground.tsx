import { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

type Props = {
  children: ReactNode;
};

export default function GradientBackground({ children }: Props) {
  return (
    <LinearGradient
      colors={['#03091F', '#071640', '#081A4C', '#06143A', '#020817']}
      locations={[0, 0.22, 0.48, 0.75, 1]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
  },
});