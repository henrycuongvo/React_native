import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.loginWrapper}>
        <View style={styles.username}>
          <Text> Username: </Text>
        </View>
        <View style={styles.password}>
          <Text> Password: </Text>
        </View>
      </View>
    </View>
  );
}
export default Login;
