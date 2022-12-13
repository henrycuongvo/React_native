import React from "react";
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    width: "100%",
    height: "5%",
    backgroundColor: "grey",
  },
  imgBugerWrapper: {
    backgroundColor: "red",
    width: "100%",
    height: "30%",
  },

  //Css for table selection
  tableWrapper: {
    width: "100%",
    height: "55%",
    backgroundColor: "#fff",
  },
  table: {
    marginTop: 30,
    width: "90%",
    height: "60%",
    alignSelf: "center",
    borderColor: "#333",
    borderWidth: 1,
  },
  rowIng: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  label: {
    fontSize: 20,
  },
  buttonWrapper: {},
  buttonCount: {
    backgroundColor: "red",
    fontSize: 20,
    paddingHorizontal: 20
    width: 20,
  },

  //Button Checkout
  buttonCheckout: {
    width: "80%",
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: "red",
    borderColor: "#333",
    borderWidth: 2,
  },
});
