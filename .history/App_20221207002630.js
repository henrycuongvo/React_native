import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "./src/pages/TodoList";
export default function App() {
  return (
    <View style={styles.container}>
      <TodoList />
    </View>
  );
}
