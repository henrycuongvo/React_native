import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { img } from "../../assets/images";

import Login from "../LoginScreen";
import styles from "./style";

export default function WellcomScreen() {
  return (
    <ImageBackground source={img} resizeMode="cover" style={styles.imges}>
      <View style={styles.top}>
        <Text style={styles.title}> Wellcom BurgerBuilder</Text>
      </View>
      <View style={styles.center}>
        <Login />
      </View>
      <View style={styles.bottom}></View>
    </ImageBackground>
  );
}