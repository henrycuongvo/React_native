import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WellcomScreen from "./src/pages/WellcomScreen";
export default function App() {
  return (
    <View>
      <WellcomScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
