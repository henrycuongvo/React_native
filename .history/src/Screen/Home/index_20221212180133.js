import React from "react";
import { View, Text, Image, StatusBar, Button } from "react-native";
import { useSelector } from "react-redux";

import { imgBuger } from "../../assets/images";

import styles from "./style";

export default function Home() {
  const getCart = useSelector((state) => state.buger);
  console.log(getCart);
  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusBar}></StatusBar>
      <View style={styles.imgBugerWrapper}>
        <Image
          source={imgBuger}
          resizeMode={"cover"}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      {/* Table Select */}
      <View style={styles.tableWrapper}></View>

      {/* Checkout Button */}
      <View style={styles.buttonCheckout}>
        <Button title="Check out"></Button>
      </View>
    </View>
  );
}
