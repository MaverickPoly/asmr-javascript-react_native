import {StyleSheet, Text, Touchable, TouchableOpacity, View} from "react-native"

export default function RootLayout() {
  function onpress() {
    alert("Hello world")
  }

  return <View style={styles.container}>
    <Text style={styles.text}>Hello world</Text>
    <TouchableOpacity onPress={onpress} style={styles.button}>
      <Text style={{color: "white"}}>Press Me</Text>
    </TouchableOpacity>
  </View>
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 40,
    color: "white"
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "blue",
    borderRadius: 20
  }
})
