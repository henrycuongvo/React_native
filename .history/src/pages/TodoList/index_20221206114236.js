import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function TodoList() {
  return (
    <View>
      <View style={styles.main}></View>
      <View style={styles.addTodo}>
        <TextInput
          style={{
            padding: 16,
            marginTop: 50,
            borderStyle: ("solid", "2", "#333"),
          }}
          placeholder={"Please type here…"}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  main: {},
  addTodo: {},
  text: {
    backgroundColor: "grey",
    position: "relative",
    top: "50",
  },
});
