import { element } from "prop-types";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Image,
} from "react-native";
import { eyePassword } from "../../assets/images";
import { isValidateEmail, isValidatePassword } from "../../utilies/validation";
import styles from "./style";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //Validation Email and Password
  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();
  //Handle Keyboard
  const [KeyboardisShow, setKeyboardisShow] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  // useEffect(() => {
  //   Keyboard.addListener(
  //     ("keyboardDidShow",
  //     () => {
  //       // setKeyboardisShow(true);
  //       alert("keyboardDidShow");
  //     })
  //   );
  //   Keyboard.addListener("keyboardDidHide", () => {
  //     // setKeyboardisShow(true);
  //     alert("keyboardDidHide");
  //   });
  // });

  const setShowPassword = () => {
    if (secureTextEntry === true) {
      setSecureTextEntry(false);
    } else {
      setSecureTextEntry(true);
    }
  };
  const handleSignUp = () => {
    if (isValidateEmail === true && isValidatePassword === true) {
      alert("sign up success");
    }
    return "Email or Password not correct";
  };
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
            // onChangeText={(text) => {
            //   setErrorEmail(
            //     isValidateEmail(text) === true
            //       ? ""
            //       : "Email not in correct format"
            //   );
            // }}
          />
        </View>
        <Text style={{ color: "red", fontSize: 12 }}> {errorEmail}</Text>
        <View style={styles.password}>
          <TextInput
            placeholder="Password"
            secureTextEntry
            // onChangeText={(text) => {
            //   setErrorPassword(
            //     isValidatePassword(text) === true ? "" : "Password not correct"
            //   );
            // }}
          />
          <Text
            onPress={() => setShowPassword()}
            style={styles.eyePasswordWrapper}
          >
            <Image
              source={require("../../assets/images/view.png")}
              style={styles.eyePassword}
            />
          </Text>
        </View>
        {/* <Text> </Text> */}
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
