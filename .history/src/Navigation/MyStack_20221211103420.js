import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WellcomeScreen from "../pages/WellcomScreen";

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WellcomeScreen"
        component={WellcomeScreen}
      ></Stack.Screen>
      <Stack.Screen></Stack.Screen>
    </Stack.Navigator>
  );
}
export default MyStack;
