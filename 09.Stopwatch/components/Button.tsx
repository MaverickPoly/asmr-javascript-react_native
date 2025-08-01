import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
    text: string;
    command: () => void;
    disabled: boolean;
}

export default function Button(props: ButtonProps) {
    return <TouchableOpacity 
        onPress={props.command} 
        style={[styles.button, props.disabled && {backgroundColor: "#888"}]}
        disabled={props.disabled}
    >
        <Text style={styles.btn_text}>{props.text}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 30, paddingVertical: 14, backgroundColor: "blue",
    borderRadius: 12,
  },
  btn_text: {
    fontSize: 19, color: "white", fontWeight: "500"
  },
})
