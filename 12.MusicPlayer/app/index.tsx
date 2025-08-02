import { StyleSheet, Text, View } from "react-native";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import {Audio} from "expo-av"

export default function Index() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const handle = async () => {
      const {sound} = await Audio.Sound.createAsync(
        require("@/assets/music1.mp3")
      )
      setSound(sound);
      await sound.playAsync();
    }

    handle()
  }, [])

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync()
      }
    }
  }, [sound])

  const handlePrev = () => {

  }

  const handleNext = () => {
    
  }

  const handlePlayPause = async () => {
    if (!sound) return;

    const status = await sound.getStatusAsync();
    if (status.isPlaying) {
      await sound.pauseAsync()
      setIsPlaying(false);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text_main}>Play music</Text>

      <View style={styles.action}>

        <Button text="Prev" command={handlePrev} />
        <Button text="Play" command={handlePlayPause} />
        <Button text="Next" command={handleNext} />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20, flex: 1, alignItems: "center", 
    justifyContent: "center",
  },
  action: {
    marginTop: 16, display: "flex", gap: 10,
  },
  text_main: {
    fontSize: 48, fontWeight: "700"
  }
})
