import React from "react";
import { createStackNavigator } from "react-navigation";
import Login from "../pages/Login";
import WellcomeScreen from "../pages/WellcomScreen";

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  WellcomeScreen: { screen: WellcomeScreen },
});
export default AppNavigator;
