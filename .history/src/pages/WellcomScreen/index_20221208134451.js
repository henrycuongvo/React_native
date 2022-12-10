import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";

export default WellcomScreen = () => {
  return (
    <ImageBackground source={require("../../assets/images/background")}>
      <View style={styles.container}> Hello</View>;
    </ImageBackground>
  );
};
