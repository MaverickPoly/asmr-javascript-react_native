import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons"

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({color, size}) => {
                    let iconName: "home" | "person" = route.name === "home" ? "home" : "person";
                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}
        />
    )
}