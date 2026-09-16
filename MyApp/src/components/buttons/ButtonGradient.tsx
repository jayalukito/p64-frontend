import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constants/colours";
export default function ButtonGradient() {
    return (
        <LinearGradient
            colors={[ colors.purple, colors.purpleLight, colors.purpleSoft]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
        ></LinearGradient>
    );
}