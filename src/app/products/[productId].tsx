import { Link, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Platform,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import data from "../../data";
import { Image } from "expo-image";

export default function ProductDetailsScreen() {
  const params = useLocalSearchParams();
  const productId = params?.productId;
  const isSale = params?.sale === "true";
  const product = data.find((product) => product.id === productId);
  const { width } = useWindowDimensions();

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
    <ScrollView contentContainerClassName="items-center  md:px-4">
      <View className="flex-col md:flex-row max-w-screen-lg md:mt-8 items-center md:items-start flex-1">
        <Image
          source={product.imageSource}
          style={Platform.OS !== "web" ? { height: 400, width } : undefined}
          className="md:rounded-lg h-[400px] md:w-[500px] w-full"
        />
        <View className="flex-1 p-6">
          <Text className="text-2xl font-bold">{product.name}</Text>
          {isSale ? (
            <View className="flex-row gap-2">
              <Text className="text-red-400 line-through text-xl mb-4">
                ${product.price}.00
              </Text>
              <Text className="text-gray-600 text-xl mb-4 font-bold">
                ${product.price - 5}.00
              </Text>
            </View>
          ) : (
            <Text className="text-gray-500 text-xl mb-4">
              ${product.price}.00
            </Text>
          )}
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
