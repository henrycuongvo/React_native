import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { img } from "../../assets/images";
import styles from "./style";

import Signin from "../Signin";

export default function Wellcome() {
  return (
    <ImageBackground source={img} resizeMode="cover" style={styles.imges}>
      <View style={styles.top}>
        <Text style={styles.title}> Wellcom BurgerBuilder</Text>
      </View>
      <View style={styles.center}>
        <Signin />
      </View>
      <View style={styles.bottom}></View>
    </ImageBackground>
  );
}
