import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, ImageBackground } from "react-native";

const img = {
  uri: "https://st2.depositphotos.com/3300441/11588/i/950/depositphotos_115884046-stock-photo-burgers-set-background.jpg",
};

export default WellcomScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/background.jpeg")}
      resizeMode="cover"
      style={styles.img}
    ></ImageBackground>
  );
};
const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: "center",
  },
});
