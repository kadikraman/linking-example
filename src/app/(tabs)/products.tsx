import { FlatList, Platform, ScrollView, Text, View } from "react-native";
import data from "../../data";
import { ProductCard } from "../../components/ProductCard";

declare var process: {
  env: {
    EXPO_PUBLIC_TEST_VAR: string;
  };
};

export default function ProductListScreen() {
  if (Platform.OS === "web") {
    return (
      <ScrollView className="items-center">
        <View
          className={
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl"
          }
        >
          {data.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </View>
      </ScrollView>
    );
  }
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ProductCard item={item} />}
      ListFooterComponent={
        <View className="justify-center items-center my-4">
          <Text className="text-gray-400 italic">
            {process.env.EXPO_PUBLIC_TEST_VAR}
          </Text>
        </View>
      }
    />
  );
}
