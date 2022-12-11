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
import { iconFacebook, iconGoogle } from "../../assets/images";
import styles from "./style";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //Validation Email and Password
  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();
  //Handle Keyboard
  const [KeyboardisShow, setKeyboardisShow] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

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

  const handleSignUp = () => {
    if (isValidateEmail === true && isValidatePassword === true) {
      alert("sign up success");
    } else {
      alert("Email or Password not correct");
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "hight"}
      style={styles.container}
    >
      <View style={styles.loginWrapper}>
        {/* Creact Email input & Password input */}

        <View style={styles.emailWrapper}>
          <TextInput
            // onSubmitEditing={Keyboard.dismiss}
            placeholder="Email"
          />
        </View>
        <Text style={{ color: "red", fontSize: 12 }}> {errorEmail}</Text>
        <View style={styles.password}>
          <TextInput placeholder="Password" secureTextEntry />
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
        {/* Creact SignUp Button */}

        <TouchableOpacity
          onPress={() => {
            handleSignUp();
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

        {/* Login by connect from  icon */}
        <View style={styles.iconWrapper}>
          <Text style={styles.icon} onPress={() => alert("iconFb")}>
            <Image source={iconFacebook} style={{ width: 40, height: 40 }} />
          </Text>
          <Text onPress={() => alert("iconGG")}>
            <Image source={iconGoogle} style={{ width: 40, height: 40 }} />
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
export default Login;
