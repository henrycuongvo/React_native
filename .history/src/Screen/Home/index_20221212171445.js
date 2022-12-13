import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { imgBuger } from "../../assets/images";

import styles from "./style";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar> </StatusBar>
      <View style={styles.imgBugerWrapper}>
        <Image
          source={imgBuger}
          resizeMode={"cover"}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.tableWrapper}>
        <Text></Text>
      </View>
    </View>
  );
}
