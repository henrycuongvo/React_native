import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "./src/pages/TodoList";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.input}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF5F5",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 40,
    // alignItems: "center",
    // justifyContent: "center",
  },
  input: {},
});
