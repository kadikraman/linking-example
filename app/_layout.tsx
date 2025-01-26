import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="products" />
      <Stack.Screen name="products/[productId]" />
    </Stack>
  );
}
