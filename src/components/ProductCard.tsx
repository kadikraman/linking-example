import { Platform, Pressable, Text, View } from "react-native";
import data from "../data";
import { Image } from "expo-image";
import { Link } from "expo-router";

export function ProductCard({ item }: { item: (typeof data)[number] }) {
  return (
    <View
      className="mx-4 my-2 bg-white rounded-xl drop-shadow-lg"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <View className="rounded-tl-lg rounded-tr-lg overflow-hidden">
        <Image
          source={item.imageSource}
          style={{ height: Platform.OS === "web" ? 250 : 150 }}
        />
      </View>
      <View className="p-4">
        <Text className="font-bold text-lg">{item.name}</Text>
        <Text className="text-gray-500">${item.price}.00</Text>
        <View className="flex-row justify-between mt-4">
          <Link href={`products/${item.id}`} asChild>
            <Pressable className="border border-gray-600 rounded px-4 py-2">
              <Text className="text-gray-600">View Details</Text>
            </Pressable>
          </Link>
          <Pressable
            className="bg-black rounded px-4 py-2"
            onPress={() => alert("Added!")}
          >
            <Text className="text-white font-bold">Add to Cart</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
