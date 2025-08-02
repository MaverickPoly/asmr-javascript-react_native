import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
    text: string;
    command: () => void
}

export default function Button(props: ButtonProps) {
    return <TouchableOpacity onPress={props.command} style={styles.button}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 28, paddingVertical: 14, borderRadius: 12,
        backgroundColor: "orange", display: "flex",
        alignItems: "center", justifyContent: "center"
    },
    text: {
        color: "white", fontSize: 18,
    }
})