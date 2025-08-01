import { useTheme } from "@/utils/themeContext";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const {theme, toggleTheme} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background
      }}
    >
      <Text style={{fontSize: 22, color: theme.colors.text}}>Current theme: {theme.colors.primary}</Text>
      <TouchableOpacity style={{
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 28, paddingVertical: 14,
        borderRadius: 18, marginTop: 20
      }}
        onPress={toggleTheme}
      >
        <Text style={{fontSize: 20, color: theme.colors.text}}>Toggle theme</Text>
      </TouchableOpacity>
    </View>
  );
}
