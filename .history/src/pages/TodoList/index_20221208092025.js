import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import styles from "./styles";

export default function TodoList() {
  return (
    <View style={styles.container}>
      <View style={styles.main}></View>
      <View style={styles.addTodo}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputWrapper}
            placeholder={"Please type here…"}
          ></TextInput>
        </View>
        <View styles={styles.iconWrapper}>
          <Text styles={styles.iconAdd}> +</Text>
        </View>
      </View>
    </View>
  );
}
