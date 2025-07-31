import { useState } from "react";
import {  StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ButtonProps = {
  text: string,
  callback: () => void
}

function Button(props: ButtonProps) {
  return <TouchableOpacity style={styles.button} onPress={props.callback}>
    <Text style={styles.btn_text}>{props.text}</Text>
  </TouchableOpacity>
}

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <View
      style={styles.container}
    >
      <View style={styles.box}>
        <Button text="-" callback={() => setCount(count - 1)} />
          <Text style={styles.text}>{count}</Text>
        <Button text="+" callback={() => setCount(count + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    gap: 14,
    overflow: "hidden",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#eee",
    paddingHorizontal: 24,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 24
  },
  btn_text: {
    fontSize: 24
  },
})
