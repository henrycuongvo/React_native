import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Login from "../Login";
import styles from "./style";

const img = {
  uri: "https://st2.depositphotos.com/3300441/11588/i/950/depositphotos_115884046-stock-photo-burgers-set-background.jpg",
};

export default WellcomScreen = () => {
  return (
    <ImageBackground source={img} resizeMode="cover" style={styles.imges}>
      <View style={styles.top}>
        <Text style={styles.title}> Wellcom BurgerBuilder</Text>
      </View>
      <View style={styles.center}>
        <Login />
      </View>
      <View style={styles.bottom}>
        <Icon name="facebook" size={50} color={"blue"}></Icon>
        <Icon name="google"></Icon>
      </View>
    </ImageBackground>
  );
};
