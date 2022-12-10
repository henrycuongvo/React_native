import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TodoList() {
  return (
    <View>
      <Text style={styles.text}>index</Text>
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
