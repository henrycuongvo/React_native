import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { img } from "../../assets/images";
import styles from "./style";

import LoginScreen from "../LoginScreen";

export default function WellcomeScreen() {
  return (
    <ImageBackground source={img} resizeMode="cover" style={styles.imges}>
      <View style={styles.top}>
        <Text style={styles.title}> Wellcom BurgerBuilder</Text>
      </View>
      <View style={styles.center}>
        <LoginScreen />
      </View>
      <View style={styles.bottom}></View>
    </ImageBackground>
  );
}
