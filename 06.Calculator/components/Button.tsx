import { StyleSheet, TouchableOpacity, Text } from "react-native";


interface ButtonProps {
    text: string;
    command: () => void;
    style?: object
}

export default function Button(props: ButtonProps) {

    return <TouchableOpacity 
        style={[styles.button, props.style]}
        onPress={props.command}
    >
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        width: 10, height: 85, borderRadius: 14,
        backgroundColor: "#eee", borderWidth: 1,
        borderColor: "#999", flex: 1, 
        display: "flex", alignItems: "center",
        justifyContent: "center", marginRight: 10,
    },
    text: {
        fontSize: 22, fontWeight: "600",
    }
})
