import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function ProductListScreen() {
  const params = useLocalSearchParams();
  return (
    <ScrollView>
      <Text className="text-cyan-500">{JSON.stringify(params, null, " ")}</Text>
    </ScrollView>
  );
}
