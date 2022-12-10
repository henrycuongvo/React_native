import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import styles from "./style";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [KeyboardisShow, setKeyboardisShow] = useState(false);
  useEffect(() => {
    Keyboard.addListener(
      ("keyboardDidShow",
      () => {
        // setKeyboardisShow(true);
        alert("keyboardDidShow");
      })
    );
    Keyboard.addListener("keyboardDidHide", () => {
      // setKeyboardisShow(true);
      alert("keyboardDidHide");
    });
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "hight"}
      style={styles.container}
    >
      <View style={styles.loginWrapper}>
        <View style={styles.username}>
          <TextInput
            // onSubmitEditing={Keyboard.dismiss}
            placeholder="Email"
          ></TextInput>
        </View>
        <View style={styles.password}>
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
    </KeyboardAvoidingView>
  );
}
export default Login;
