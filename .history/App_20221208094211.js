import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "./src/pages/TodoList";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text> Item 1</Text>
        <Text> Item 2</Text>
        <Text> Item 3</Text>
      </View>
      <View style={styles.input}></View>
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF5F5",
    width: "100%",
    height: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
