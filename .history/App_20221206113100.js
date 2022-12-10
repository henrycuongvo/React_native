import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TextPage from "./src/Text";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React App Henry Cuong</Text>
      <StatusBar style="auto" />
      <TextPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
