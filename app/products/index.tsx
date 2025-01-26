import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text } from "react-native";

export default function ProductListScreen() {
  const params = useLocalSearchParams();
  return (
    <ScrollView>
      <Text className="text-cyan-500">{JSON.stringify(params, null, " ")}</Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
