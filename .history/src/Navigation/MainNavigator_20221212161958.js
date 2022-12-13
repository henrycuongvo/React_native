import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Wellcome from "../screen/Wellcome";
import RegisterScreen from "../screen/Register";
import OrderScreen from "../screen/OrderScreen";

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WellcomeScreen" component={Wellcome} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
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
