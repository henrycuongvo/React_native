import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./style";

function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.loginWrapper}>
        <View style={styles.username}>
          <Text> Username: </Text>
          <TextInput placeholder="user name"></TextInput>
        </View>
        <View style={styles.password}>
          <Text> Password: </Text>
          <TextInput></TextInput>
        </View>
      </View>
    </View>
  );
}
export default Login;
