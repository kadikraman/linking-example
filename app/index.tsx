import { StatusBar } from "expo-status-bar";
import { ScrollView, Text } from "react-native";

export default function App() {
  return (
    <ScrollView>
      <Text className="text-cyan-500">
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
