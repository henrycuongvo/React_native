import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function TodoList() {
  return (
    <View>
      <View style={styles.main}></View>
      <View style={styles.addTodo}>
        <TextInput style={{}} placeholder={"Please type here…"}></TextInput>
      </View>
    </View>
  );
}
