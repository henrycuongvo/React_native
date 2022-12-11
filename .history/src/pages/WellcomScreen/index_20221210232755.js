import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { img, iconGoogle, iconFacebook } from "../../assets/images";

import Login from "../Login";
import styles from "./style";

export default WellcomScreen = () => {
  return (
    <ImageBackground source={img} resizeMode="cover" style={styles.imges}>
      <View style={styles.top}>
        <Text style={styles.title}> Wellcom BurgerBuilder</Text>
      </View>
      <View style={styles.center}>
        <Login />
        <View style={styles.iconWrapper}>
          <Text onPress={() => alert("iconFb")}>
            <Image
              source={iconFacebook}
              // style={{ width: 10, height: 20 }}
            ></Image>
          </Text>
          <Text onPress={() => alert("iconGG")}>
            <Image
              source={iconGoogle}
              style={{ width: 40, height: 40 }}
            ></Image>
          </Text>
        </View>
      </View>
      <View style={styles.bottom}></View>
    </ImageBackground>
  );
};
