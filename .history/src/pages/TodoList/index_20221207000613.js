import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import styles from "./styles";

export default function TodoList() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.main}></View>
      <View style={styles.addTodo}> */}
        <TextInput
          style={styles.inputWrapper}
          // placeholder={"Please type here…"}
        ></TextInput>
      </View>
    </View>
  );
}
