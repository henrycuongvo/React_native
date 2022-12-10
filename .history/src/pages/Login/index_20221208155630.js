import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
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
        <Text>Forgot Password?</Text>
        <TouchableOpacity style={styles.signUpWrapper}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Login;
