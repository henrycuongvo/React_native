import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styles from "./style";

function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.loginWrapper}>
        <View style={styles.username}>
          {/* <Text> Username: </Text> */}
          <TextInput placeholder="User name"></TextInput>
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
        <TouchableOpacity style={styles.signUpWrapper}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              marginTop: 20,
              alignSelf: "center",
            }}
          >
            Don't have an account?
            <TouchableOpacity>
              <Text
                style={{
                  color: "#62B6B7",
                  alignContent: "center",
                }}
                onPress={() => {
                  alert("Register");
                }}
              >
                Create account
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}
export default Login;
