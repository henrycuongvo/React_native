import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginWrapper}>
        <View style={styles.username}></View>
        <View style={styles.password}></View>
      </View>
    </View>
  );
};
