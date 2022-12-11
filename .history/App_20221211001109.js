import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/AppNavigator";
import WellcomScreen from "./src/pages/WellcomScreen";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <WellcomScreen /> */}
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
