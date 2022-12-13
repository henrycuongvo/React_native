import React from "react";
import { View, Text, Image, StatusBar, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { imgBuger } from "../../assets/images";
import { increment } from "../../redux/reducers/burger.reducer";

import styles from "./style";

export default function Home() {
  const getCart = useSelector((state) => state.burger.cart);
  console.log(getCart);
  const dispatch = useDispatch();
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
      <View style={styles.tableWrapper}>
        <View style={styles.table}>
          <View style={styles.rowIng}>
            <Text style={styles.label}></Text>
            <Text style={styles.buttonWrapper}>
              <Button title="-"></Button>
              <Text style={{ fontSize: 20 }}>{getCart.salad}</Text>
              <Button title="+"></Button>
            </Text>
          </View>
        </View>
      </View>

      {/* Checkout Button */}
      <View style={styles.buttonCheckout}>
        <Button
          onPress={() => dispatch(increment("salad"))}
          title="Check out"
        ></Button>
      </View>
    </View>
  );
}
