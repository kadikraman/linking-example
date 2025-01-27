import { FlatList, Platform, ScrollView, View } from "react-native";
import data from "../../data";
import { ProductCard } from "../../components/ProductCard";

export default function ProductListScreen() {
  if (Platform.OS === "web") {
    return (
      <ScrollView>
        <View className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
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
    />
  );
}
