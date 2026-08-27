import { Text, TouchableOpacity, StyleSheet} from "react-native";
import { router } from "expo-router";

export default function BackButton(){
    return (
    <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
        >
        <Text style={styles.backText}>‹</Text>
    </TouchableOpacity>
    
    )
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#111F44',
        borderWidth: 1,
        borderColor: '#20335F',
        justifyContent: 'center',
        alignItems: 'center',
    },

    backText: {
        color: 'white',
        fontSize: 24,
    },
})