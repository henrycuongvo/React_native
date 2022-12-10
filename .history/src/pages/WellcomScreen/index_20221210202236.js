import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Login from "../Login";
import styles from "./style";

const img = {
  uri: "https://st2.depositphotos.com/3300441/11588/i/950/depositphotos_115884046-stock-photo-burgers-set-background.jpg",
};
const iconFacebook = {
  uri: "https://cdn-icons-png.flaticon.com/512/1312/1312139.png",
};
export default WellcomScreen = () => {
  return (
    <ImageBackground source={img} resizeMode="cover" style={styles.imges}>
      <View style={styles.top}>
        <Text style={styles.title}> Wellcom BurgerBuilder</Text>
      </View>
      <View style={styles.center}>
        <Login />
        <View style={styles.iconWrapper}>
          <Image
            source={iconFacebook}
            style={{ width: 40, height: 40 }}
          ></Image>
          <Icon
            style={styles.icon}
            name="facebook"
            size={50}
            color="black"
          ></Icon>
          <Icon name="google" size={50} color="black"></Icon>
        </View>
      </View>
      <View style={styles.bottom}></View>
    </ImageBackground>
  );
};
