import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./style";

function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.loginWrapper}>
        <View style={styles.username}>
          <Text> Username: </Text>
          <TextInput placeholder="User name"></TextInput>
        </View>
        <View style={styles.password}>
          <Text> Password: </Text>
          <TextInput placeholder="Password"></TextInput>
        </View>
      </View>
    </View>
  );
}
export default Login;
