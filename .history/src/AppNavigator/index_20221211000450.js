import React from "react";
import { createStackNavigator } from 'react-navigation';
import Login from "../pages/Login";


export default const AppNavigator = createStackNavigator({
  Login: {screen: Login}
})
