import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./src/Navigation/MainNavigator";
// import "react-native-gesture-handler";
// import AppNavigator from "./src/AppNavigator";
import WellcomScreen from "./src/screen/WellcomScreen";
export default function App() {
  return (
    // <View style={styles.container}>
    //   <WellcomScreen />
    // </View>
    <MainNavigator></MainNavigator>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//   },
// });
