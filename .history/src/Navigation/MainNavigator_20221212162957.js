import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Wellcome from "../screen/Wellcome";
import SignUp from "../screen/SignUp";
import Order from "../screen/OrderScreen";

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Go back" component={Wellcome} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
