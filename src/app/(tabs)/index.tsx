import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1">
      <View className="flex-1 justify-evenly">
        <View className="flex-2 h-[50%] items-center justify-center">
          <Image
            source={require("../../../assets/buildings.jpg")}
            style={{
              height: "100%",
              width: "100%",
              transform: [{ rotate: "180deg" }],
            }}
          />
        </View>
        <View className="flex-2 h-[50%] items-center justify-center">
          <Image
            source={require("../../../assets/buildings.jpg")}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
      </View>
      <View className="absolute top-0 bottom-0 right-0 left-0 items-center justify-center flex-1">
        <Link href="/products" asChild>
          <Pressable className="bg-black p-5 rounded">
            <Text className="text-white font-bold tracking-widest uppercase ">
              Start shopping
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
