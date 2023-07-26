import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function Signin() {
  return (
    <View style={styles.container}>
      <Text>Signin</Text>
      <StatusBar style="auto" />
    </View>
  );
}
