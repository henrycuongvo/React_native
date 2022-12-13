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
    marginTop: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  label: {
    fontSize: 20,
  },
  buttonWrapper: {
    width: "40%",
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countShow: {
    fontSize: 20,
    left: 10,
    // marginLeft: 20,
    textAlign: "center",
  },
  buttonCount: {
    backgroundColor: "red",
    alignContent: "center",
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  textButton: {
    fontSize: 20,
    textAlign: "center",
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
