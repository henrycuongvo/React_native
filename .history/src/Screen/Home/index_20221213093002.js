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
            <View style={styles.buttonWrapper}>
              <View style={styles.buttonCount}>
                <Text
                  style={styles.textButton}
                  onPress={() => dispatch(decrement("salad"))}
                >
                  -
                </Text>
              </View>
              <Text valu style={styles.countShow}>
                {getCart.salad}
              </Text>
              <View style={styles.buttonCount}>
                <Text
                  style={styles.textButton}
                  onPress={() => dispatch(increment("salad"))}
                >
                  +
                </Text>
              </View>
            </View>
          </View>

          {/* BACON */}
          <View style={styles.rowIng}>
            <Text style={styles.label}> Bacon</Text>
            <View style={styles.buttonWrapper}>
              <View style={styles.buttonCount}>
                <Text
                  style={styles.textButton}
                  onPress={() => dispatch(decrement("bacon"))}
                >
                  -
                </Text>
              </View>
              <Text style={styles.countShow}>{getCart.bacon}</Text>
              <View style={styles.buttonCount}>
                <Text
                  style={styles.textButton}
                  onPress={() => dispatch(increment("bacon"))}
                >
                  +
                </Text>
              </View>
            </View>
          </View>

          {/* CHEESE */}
          <View style={styles.rowIng}>
            <Text style={styles.label}> Cheese</Text>
            <View style={styles.buttonWrapper}>
              <View style={styles.buttonCount}>
                <Text
                  style={styles.textButton}
                  onPress={() => dispatch(decrement("cheese"))}
                >
                  -
                </Text>
              </View>
              <Text style={styles.countShow}>{getCart.cheese}</Text>
              <View style={styles.buttonCount}>
                <Text
                  style={styles.textButton}
                  onPress={() => dispatch(increment("cheese"))}
                >
                  +
                </Text>
              </View>
            </View>
          </View>

          {/* MEAT */}
          <View style={styles.rowIng}>
            <Text style={styles.label}> Meat</Text>
            <View style={styles.buttonWrapper}>
              <View style={styles.buttonCount}>
                <Text
                  style={styles.textButton}
                  onPress={() => dispatch(decrement("meat"))}
                >
                  -
                </Text>
              </View>
              <Text style={styles.countShow}>{getCart.meat}</Text>
              <View style={styles.buttonCount}>
                <Text
                  style={styles.textButton}
                  onPress={() => dispatch(increment("meat"))}
                >
                  +
                </Text>
              </View>
            </View>
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
