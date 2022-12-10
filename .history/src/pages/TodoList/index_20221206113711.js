import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TodoList() {
  return (
    <View>
      <View style={styles.main}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  main: {},
  text: {
    backgroundColor: "grey",
    position: "relative",
    top: "50",
  },
});
