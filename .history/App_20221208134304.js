import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "./src/pages/TodoList";
import WellcomScreen from "./src/pages/WellcomScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <WellcomScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
