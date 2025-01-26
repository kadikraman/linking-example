import { Link, Stack, Tabs } from "expo-router";
import { Platform, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

export default function AppLayout() {
  if (Platform.OS === "web") {
    return (
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerLeft: () => (
              <Text className="ml-6 font-bold tracking-widest text-lg">
                My Shop
              </Text>
            ),
            headerTitle: "",
            headerRight: () => (
              <View className="mr-6 flex-row gap-4">
                <Text className="font-bold underline text-lg tracking-wider">
                  Home
                </Text>
                <Link href="/products">
                  <Text className="text-lg tracking-wider font-bold text-gray-500">
                    Shop
                  </Text>
                </Link>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="products"
          options={{
            headerLeft: () => (
              <Text className="ml-6 font-bold tracking-widest text-lg">
                My Shop <Text className="font-normal"> | Products</Text>
              </Text>
            ),
            headerTitle: "",
            headerRight: () => (
              <View className="mr-6 flex-row gap-4">
                <Link href="/">
                  <Text className="text-lg tracking-wider font-bold text-gray-500">
                    Home
                  </Text>
                </Link>
                <Text className="font-bold underline text-lg tracking-wider">
                  Shop
                </Text>
              </View>
            ),
          }}
        />
      </Stack>
    );
  }
  return (
    <Tabs>
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
