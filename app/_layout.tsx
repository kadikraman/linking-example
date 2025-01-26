import { Stack } from "expo-router";
import "../global.css";
import { Platform } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="products/[productId]"
        options={Platform.OS !== "web" ? { presentation: "modal" } : undefined}
      />
    </Stack>
  );
}
