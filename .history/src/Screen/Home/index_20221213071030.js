import React from "react";
import { View, Text, Image, StatusBar, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { imgBuger } from "../../assets/images";
import { increment, decrement } from "../../redux/reducers/burger.reducer";

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

      {/* SALAD */}
      <View style={styles.tableWrapper}>
        <View style={styles.table}>
          <View style={styles.rowIng}>
            <Text style={styles.label}> Salad</Text>
            <Text style={styles.buttonWrapper}>
              <Text
                style={styles.buttonCount}
                onPress={() => dispatch(decrement("salad"))}
              >
                -
              </Text>
              <Text style={styles.countShow}>{getCart.salad}</Text>
              <Text
                style={styles.buttonCount}
                onPress={() => dispatch(increment("salad"))}
              >
                +
              </Text>
            </Text>
          </View>

          {/* BACON */}
          <View style={styles.rowIng}>
            <Text style={styles.label}> Salad</Text>
            <Text style={styles.buttonWrapper}>
              <Text
                style={styles.buttonCount}
                onPress={() => dispatch(decrement("bacon"))}
              >
                -
              </Text>
              <Text style={styles.countShow}>{getCart.salad}</Text>
              <Text
                style={styles.buttonCount}
                onPress={() => dispatch(increment("bacon"))}
              >
                +
              </Text>
            </Text>
          </View>

          {/* CHEESE */}
          <View style={styles.rowIng}>
            <Text style={styles.label}> Salad</Text>
            <Text style={styles.buttonWrapper}>
              <Text
                style={styles.buttonCount}
                onPress={() => dispatch(decrement("cheese"))}
              >
                -
              </Text>
              <Text style={styles.countShow}>{getCart.salad}</Text>
              <Text
                style={styles.buttonCount}
                onPress={() => dispatch(increment("cheese"))}
              >
                +
              </Text>
            </Text>
          </View>

          {/* MEAT */}
          <View style={styles.rowIng}>
            <Text style={styles.label}> Salad</Text>
            <Text style={styles.buttonWrapper}>
              <Text
                style={styles.buttonCount}
                onPress={() => dispatch(decrement("meat"))}
              >
                -
              </Text>
              <Text style={styles.countShow}>{getCart.salad}</Text>
              <Text
                style={styles.buttonCount}
                onPress={() => dispatch(increment("meat"))}
              >
                +
              </Text>
            </Text>
          </View>
        </View>
      </View>

      {/* Checkout Button */}
      <View style={styles.buttonCheckout}>
        <Button
          onPress={() => alert("Go to Order Screen")}
          title="Check out"
        ></Button>
      </View>
    </View>
  );
}
