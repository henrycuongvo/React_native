import React from "react";
import { createStackNavigator } from "react-navigation";
import Login from "../pages/Login";

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
});
export default AppNavigator;
