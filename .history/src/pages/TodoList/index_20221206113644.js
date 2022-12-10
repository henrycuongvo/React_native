import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TodoList() {
  return (
    <View>
      <View style={styles.main}>index</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  text: {
    backgroundColor: "grey",
    position: "relative",
    top: "50",
  },
});
