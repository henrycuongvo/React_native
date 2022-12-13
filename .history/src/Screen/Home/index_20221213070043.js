import React from "react";
import { View, Text, Image, StatusBar, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { imgBuger } from "../../assets/images";
import { increment } from "../../redux/reducers/burger.reducer";

import styles from "./style";

export default function Home() {
  const getCart = useSelector((state) => state.burger.burger.cart);
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
            <Text style={styles.label}> Salad</Text>
            <Text style={styles.buttonWrapper}>
              <Text style={styles.buttonCount}>-</Text>
              <Text style={styles.countShow}>{getCart.salad}</Text>
              <Text style={styles.buttonCount}>+</Text>
            </Text>
          </View>
          <View style={styles.rowIng}>
            <Text style={styles.label}> Salad</Text>
            <Text style={styles.buttonWrapper}>
              <Text style={styles.buttonCount}>-</Text>
              <Text style={styles.countShow}>{getCart.bacon}</Text>
              <Text style={styles.buttonCount}>+</Text>
            </Text>
          </View>
          <View style={styles.rowIng}>
            <Text style={styles.label}> Salad</Text>
            <Text style={styles.buttonWrapper}>
              <Text style={styles.buttonCount}>-</Text>
              <Text style={styles.countShow}>{getCart.cheese}</Text>
              <Text style={styles.buttonCount}>+</Text>
            </Text>
          </View>
          <View style={styles.rowIng}>
            <Text style={styles.label}> Salad</Text>
            <Text style={styles.buttonWrapper}>
              <Text style={styles.buttonCount}>-</Text>
              <Text style={styles.countShow}>{getCart.meat}</Text>
              <Text style={styles.buttonCount}>+</Text>
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
