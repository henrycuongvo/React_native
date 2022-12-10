import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import styles from "./styles";

export default function TodoList() {
  return (
    <View style={styles.container}>
      <View style={styles.main}> Hello</View>
      <View style={styles.addTodo}>
        <TextInput
          style={styles.inputWrapper}
          placeholder={"Please type here…"}
        ></TextInput>
        <View styles={styles.iconWrapper}>
          <Text styles={styles.iconAdd}> Hello+</Text>
        </View>
      </View>
    </View>
  );
}
