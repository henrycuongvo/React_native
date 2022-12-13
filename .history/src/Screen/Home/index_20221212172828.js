import React from "react";
import { View, Text, Image, StatusBar, Button } from "react-native";
import { imgBuger } from "../../assets/images";

import styles from "./style";

export default function Home() {
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
      <View style={styles.tableWrapper}>
        <Text> </Text>
      </View>
      <View style={styles.buttonCheckout}>
        <Button title="Check out"></Button>
      </View>
    </View>
  );
}
