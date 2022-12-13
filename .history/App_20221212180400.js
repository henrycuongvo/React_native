import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./src/Navigation/MainNavigator";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      {" "}
      <MainNavigator></MainNavigator>
    </Provider>
  );
}
