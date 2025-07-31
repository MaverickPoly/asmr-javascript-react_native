import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [time, setTime] = useState(new Date())

  function updateTime() {
    setTime(new Date())
  }
  setInterval(updateTime, 1000)

  function formatTime() {
    const pad = (n: number) => {
      return n.toString().padStart(2, "0")
    }
    return `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`
  }

  return (
    <View style={{
      flex: 1, justifyContent: "center", alignItems: "center"
    }}>
      <Text style={{
        fontSize: 54, 
        fontWeight: "700"
      }}>{formatTime()}</Text>
    </View>
  );
}
