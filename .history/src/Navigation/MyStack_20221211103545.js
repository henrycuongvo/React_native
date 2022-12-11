import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WellcomeScreen from "../pages/WellcomScreen";
import RegisterScreen from "../pages/Register";
import WellcomScreen from "../pages/WellcomScreen";

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WellcomeScreen" component={WellcomScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
export default MyStack;
