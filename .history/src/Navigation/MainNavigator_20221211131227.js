import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WellcomeScreen from "../screen/WellcomeScreen";
import RegisterScreen from "../screen/RegisterScreen";
import OrderScreen from "../screen/OrderScreen";

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="WellcomeScreen" component={WellcomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
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
