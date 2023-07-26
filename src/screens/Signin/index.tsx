import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function Signin() {
  return (
    <View style={styles.container}>
      <Text>Signin2</Text>
      <StatusBar style="auto" />
    </View>
  );
}
