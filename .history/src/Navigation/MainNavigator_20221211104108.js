import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../pages/Register";
import WellcomScreen from "../pages/WellcomScreen";
import { createNavigationContainer } from "react-navigation";

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="WellcomeScreen" component={WellcomScreen} />
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
