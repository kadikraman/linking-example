import { Link, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, Text, View } from "react-native";
import data from "../../data";
import { Image } from "expo-image";

export default function ProductDetailsScreen() {
  const params = useLocalSearchParams();
  const productId = params?.productId;
  const product = data.find((product) => product.id === productId);

  if (!product) {
    return (
      <View className="items-center mt-24">
        <Text className="font-bold text-2xl mb-4">Not found</Text>
        <Text className="mb-6">
          Could not find product with ID{" "}
          <Text className="font-bold">{productId}</Text>
        </Text>
        <Link href="/products" asChild>
          <Pressable className="bg-black rounded px-4 py-2">
            <Text className="text-white font-bold">View Other Products</Text>
          </Pressable>
        </Link>
      </View>
    );
  }

  return (
    <ScrollView contentContainerClassName="items-center">
      <View className="flex-col md:flex-row max-w-screen-lg md:mt-8 items-center">
        <Image
          source={product.imageSource}
          style={{ height: 400, width: 500 }}
          className="md:rounded-lg h-[400px] md:w-[500px] w-full"
        />
        <View className="flex-1 p-6">
          <Text className="text-2xl font-bold">{product.name}</Text>
          <Text className="text-gray-500 text-xl mb-4">
            ${product.price}.00
          </Text>
          <Text className="leading-8 text-lg mb-6">{product.description}</Text>
          <Pressable
            className="bg-black rounded px-4 py-2 self-start"
            onPress={() => alert("Added!")}
          >
            <Text className="text-white font-bold">Add to Cart</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="dark" />
    </ScrollView>
  );
}
