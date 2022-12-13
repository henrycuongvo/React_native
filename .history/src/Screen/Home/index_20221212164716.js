import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./style";

export default function Home() {
  return (
    <View>
      <View style={styles.container}>
        <Image />
      </View>
      <Text>Home</Text>
    </View>
  );
}
