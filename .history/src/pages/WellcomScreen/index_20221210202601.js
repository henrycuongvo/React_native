import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { iconFacebook } from "../../assets/images";

import Login from "../Login";
import styles from "./style";

const img = {
  uri: "https://st2.depositphotos.com/3300441/11588/i/950/depositphotos_115884046-stock-photo-burgers-set-background.jpg",
};
// const iconFacebook = {
//   uri: "https://cdn-icons-png.flaticon.com/512/1312/1312139.png",
// };
const iconGoogle = {
  uri: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
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
          <Image source={iconGoogle} style={{ width: 40, height: 40 }}></Image>
        </View>
      </View>
      <View style={styles.bottom}></View>
    </ImageBackground>
  );
};
