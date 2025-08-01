import { useState } from "react"
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native"

interface FormProps {
    createTodo: (title: string) => Promise<void>;
}


export default function Form(props: FormProps) {
    const [title, setTitle] = useState("")

    function handlePress() {
        if (!title) return alert("Title is empty!")
        props.createTodo(title)
        setTitle("")
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                placeholder="Title..."
                value={title}
            />
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.btn_text}>Create</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex", marginBottom: 30, marginTop: 10, flexDirection: "row"
    },
    input: {
        flex: 1, marginRight: 10, borderRadius: 8,
        padding: 8, fontSize: 20,
        borderColor: "#aaa", borderWidth: 1
    },
    button: {
        paddingHorizontal: 20, paddingVertical: 8,
        backgroundColor: "#298a31", borderRadius: 6,
        alignItems: "center", justifyContent: "center"
    },
    btn_text: {
        color: "white", fontSize: 18
    }
})
