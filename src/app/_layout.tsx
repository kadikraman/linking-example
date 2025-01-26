import { Stack } from "expo-router";
import "../../global.css";
import { Platform } from "react-native";
import { HeaderNav } from "../components/HeaderNav";

export default function RootLayout() {
  return (
    <Stack>
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
