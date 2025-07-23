import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

export default function TabsLayout() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  const tabBarOptions = {
    tabBarActiveTintColor: isDark ? "#3D9DF6" : "#007AFF",
    tabBarInactiveTintColor: isDark ? "#888" : "#666",
    tabBarStyle: {
      backgroundColor: isDark ? "#121212" : "#fff",
      borderTopColor: isDark ? "#222" : "#ccc",
    },
    headerStyle: {
      backgroundColor: isDark ? "#121212" : "#fff",
    },
    headerTitleStyle: {
      color: isDark ? "#fff" : "#000",
    },
    headerTintColor: isDark ? "#fff" : "#000",
  };

  return (
    <Tabs screenOptions={tabBarOptions}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rag/chat"
        options={{
          title: "Therapy Chat",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
