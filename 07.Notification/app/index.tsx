import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Notifications from "expo-notifications"
import Device from "expo-device"
import { useEffect, useState } from "react";

async function registerPushNotificationsAsync() {
  if (Device.isDevice) {
    const {status: exisintStatus} = await Notifications.getPermissionsAsync();
    let finalStatus = exisintStatus;

    if (exisintStatus !== "granted") {
      const {status} = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }

    if (finalStatus !== "granted") {
      alert("Permission for notifications not granted!")
      return;
    }
  } else {
    alert("Must use physical device for notifications")
  }
}

export default function Index() {
  const [input, setInput] = useState("");

  useEffect(() => {
    registerPushNotificationsAsync()
  }, [])

  async function sendNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "React Native",
        body: input,
        sound: true,
        vibrate: [1, 2, 3, 5, 2, 1],
      },
      trigger: {
        seconds: 2,
        channelId: Math.random().toString(),
      }
    })
  }

  return (
    <View
      style={styles.container}
    >
      <TextInput
        style={styles.input}
        placeholder="Input..."
      />
      <TouchableOpacity style={styles.button} onPress={sendNotification}>
        <Text style={styles.button_text}>Click</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: "center", justifyContent: "center"
  },
  input: {
    borderWidth: 1, borderColor: "#7F00FF", borderRadius: 16,
    padding: 14,
  },
  button: {
    borderRadius: 12, paddingHorizontal: 24, paddingVertical: 10,
    backgroundColor: "#7F00FF", marginTop: 20
  },
  button_text: {
    color: "white", fontSize: 18,
  }
})
