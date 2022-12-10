import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TextPage() {
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
    backgroundColor: "blue",
    position: "relative",
    top: "50",
  },
});
