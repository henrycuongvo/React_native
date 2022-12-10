import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styles from "./style";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.loginWrapper}>
          <View style={styles.username}>
            {/* <Text> Username: </Text> */}
            <TextInput placeholder="Email"></TextInput>
          </View>
          <View style={styles.password}>
            {/* <Text> Password: </Text> */}
            <TextInput placeholder="Password"></TextInput>
          </View>
          <Text
            style={{
              color: "#62B6B7",
              marginTop: 10,
            }}
            onPress={() => {
              alert("forgot");
            }}
          >
            Forgot Password?
          </Text>
          <TouchableOpacity
            onPress={() => {
              alert("Hello Amy");
            }}
            style={styles.signUpWrapper}
          >
            <Text>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.creactAccount}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#62B6B7",
                }}
                onPress={() => {
                  alert("Register");
                }}
              >
                Create account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
export default Login;
