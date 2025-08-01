import Button from "@/components/Button";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [time, setTime] = useState(3595)
  const [intervalId, setIntervalId] = useState<null | number>(null);

  function handleStop() {
    if (!intervalId) return
    clearInterval(intervalId)
    setIntervalId(null);
  }

  function handleStart() {
    setIntervalId(Number(setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000)))
  }

  function handleReset() {
    setIntervalId(null);
    setTime(0);
  }

  function formattedTime() {
    const h = Math.floor(time / 3600)
    const m = Math.floor((time % 3600) / 60)
    const s = time % 60
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>{formattedTime()}</Text>

      <View style={styles.actions}>
        <Button text="Start" command={handleStart} disabled={intervalId !== null} />
        <Button text="Stop"  command={handleStop} disabled={intervalId === null} />
        <Button text="Reset"  command={handleReset} disabled={intervalId !== null || time === 0} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: "center", justifyContent: "center",
  },
  text: {
    fontSize: 64, fontWeight: "700"
  },
  
  actions: {
    display: "flex", gap: 10, marginTop: 20,
    flexDirection: "row"
  },
})
