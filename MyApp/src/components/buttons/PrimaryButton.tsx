import { ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet, ImageSourcePropType, Image, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {spacing} from '../../constants/spacing';
type Props = {
  title: string;
  onPress?: () => void;
  rightIcon?: ImageSourcePropType;
};

export default function PrimaryButton({ title, onPress, rightIcon }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.85}>
      <LinearGradient
        colors={['#5B4FE8', '#7C3AED']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.button}>

        <View style ={styles.buttonTextGroup}>
          <Text style={styles.text}>{title}</Text>
          
          {rightIcon && (
            <Image source={rightIcon}  resizeMode="contain"/>
          )}
        </View>
        

      </LinearGradient>
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
  },
  buttonTextGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width:'100%',
    paddingHorizontal: 20
  }

});