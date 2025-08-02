import { StyleSheet, Text, Touchable, TouchableHighlight, View } from "react-native";

interface Props {
    checked: boolean;
    onCheck: () => void;
}

export default function Checkbox(props: Props) {
    return <TouchableHighlight style={styles.box} onPress={props.onCheck}>
        <Text style={styles.text}>{props.checked ? "✅" : "❌"}</Text>
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    box: {
        borderRadius: 6, borderWidth: 1, borderColor: "#bbb",
        padding: 8, display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 4,
    },
    text: {
        fontSize: 16,
    }
})
