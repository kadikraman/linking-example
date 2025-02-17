import { Link, Stack, Tabs } from "expo-router";
import { Platform, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { HeaderNav } from "../../components/HeaderNav";

export default function AppLayout() {
  if (Platform.OS === "web") {
    return (
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerLeft: () => (
              <Link href="/">
                <Text className="ml-6 font-bold tracking-widest text-lg">
                  My Shop <Text className="font-normal"> | Home</Text>
                </Text>
              </Link>
            ),
            headerTitle: "",
            headerRight: () => <HeaderNav />,
          }}
        />
        <Stack.Screen
          name="products"
          options={{
            headerLeft: () => (
              <Link href="/">
                <Text className="ml-6 font-bold tracking-widest text-lg">
                  My Shop <Text className="font-normal"> | Shop</Text>
                </Text>
              </Link>
            ),
            headerTitle: "",
            headerRight: () => <HeaderNav />,
          }}
        />
      </Stack>
    );
  }
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#000" }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          title: "My Shop",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          tabBarShowLabel: false,
          title: "Products",
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
