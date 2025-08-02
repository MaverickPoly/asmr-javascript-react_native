import Checkbox from "@/components/Checkbox";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [checks, setChecks] = useState({
    lowercase: false, uppercase: true, digits: false, punctuation: false
  })
  const [password, setPassword] = useState("")
  const [passwordLength, setPasswordLength] = useState("8")

  const generatePassword = () => {
    const lengthInt = parseInt(passwordLength)
    if (isNaN(lengthInt)) return alert("Invalid password length!")

    let options = ""
    if (checks.lowercase) {
      options += "abcdefghijklmnopqrstuvwxyz"
    }
    if (checks.uppercase) {
      options += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (checks.digits) {
      options += "0123456789"
    }
    if (checks.punctuation) {
      options += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    }

    if (options.length === 0) return alert("Cannot generate password!")

    let pw = ""
    for (let i = 0; i < lengthInt; i++) {
      const randomIndex = Math.floor(Math.random() * options.length)
      pw += options[randomIndex]
    }

    setPassword(pw)
  }
  

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Random Password Generator</Text>

      <TextInput 
        style={styles.input}
        placeholder="Length"
        value={passwordLength}
        onChangeText={newText => setPasswordLength(newText)}
      />
      <View style={styles.row}>
        <Checkbox checked={checks.lowercase} onCheck={() => setChecks({...checks, lowercase: !checks.lowercase})} />
        <Text style={styles.subtitle}>Lowercase letters</Text>
      </View>
      <View style={styles.row}>
        <Checkbox checked={checks.uppercase} onCheck={() => setChecks({...checks, uppercase: !checks.uppercase})} />
        <Text style={styles.subtitle}>Uppercase letters</Text>
      </View>
      <View style={styles.row}>
        <Checkbox checked={checks.digits} onCheck={() => setChecks({...checks, digits: !checks.digits})} />
        <Text style={styles.subtitle}>Digits</Text>
      </View>
      <View style={styles.row}>
        <Checkbox checked={checks.punctuation} onCheck={() => setChecks({...checks, punctuation: !checks.punctuation})} />
        <Text style={styles.subtitle}>Punctuation</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.btn_text}>Generate</Text>
      </TouchableOpacity>

      <Text style={styles.password}>{password}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20
  },
  title: {
    fontSize: 34, marginBottom: 30, fontWeight: "600", textAlign: "center"
  },
  password: {
    marginTop: 24, fontSize: 28, fontWeight: "500",
  },
  input: {
    borderWidth: 1, borderColor: "#33e",
    borderRadius: 8, padding: 8, marginBottom: 10,
  },

  row: {
    display: "flex", flexDirection: "row", alignItems: "center",
    justifyContent: "flex-start", gap: 8,
  },
  subtitle: {
    fontSize: 18, fontWeight: "400"
  },

  button: {
    paddingHorizontal: 30, paddingVertical: 12, backgroundColor: "blue",
    borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
    marginTop: 20,
  },
  btn_text: {
    fontSize: 18, color: "white"
  },
})
