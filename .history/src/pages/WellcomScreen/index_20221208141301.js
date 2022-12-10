import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style";

const img = {
  uri: "https://st2.depositphotos.com/3300441/11588/i/950/depositphotos_115884046-stock-photo-burgers-set-background.jpg",
};

export default WellcomScreen = () => {
  return (
    <ImageBackground source={img} resizeMode="cover" style={styles.imges}>
      <View style={styles.top}>
        <Text style={styles.title}> Wellcom to BurgerBuilder</Text>
      </View>
      <View style={styles.center}></View>
      <View style={styles.bottom}></View>
    </ImageBackground>
  );
};
