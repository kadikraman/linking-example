import { Stack } from "expo-router";
import "../../global.css";
import { Platform } from "react-native";
import { HeaderNav } from "../components/HeaderNav";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <Stack>
      <StatusBar style="dark" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="products/[productId]"
        options={
          Platform.OS === "web"
            ? { headerRight: () => <HeaderNav />, title: "" }
            : { presentation: "modal" }
        }
      />
    </Stack>
  );
}
