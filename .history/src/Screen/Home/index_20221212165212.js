import React from "react";
import { View, Text, Image } from "react-native";
import { imgBuger } from "../../assets/images";

import styles from "./style";

export default function Home() {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={imgBuger}
          resizeMode={"cover"}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <Text>Home</Text>
    </View>
  );
}
