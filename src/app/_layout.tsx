import { Stack } from "expo-router";
import "../../global.css";
import { Platform } from "react-native";
import { HeaderNav } from "../components/HeaderNav";
import data from "../data";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="products/[productId]"
        options={(props) => {
          // @ts-ignore
          const productId = props?.route?.params?.productId;
          const product = data.find((product) => product.id === productId);

          const title = product?.name ?? "Not found";

          if (Platform.OS === "web") {
            return {
              headerRight: () => <HeaderNav />,
              title,
            };
          }

          return { presentation: "modal", title };
        }}
      />
    </Stack>
  );
}
