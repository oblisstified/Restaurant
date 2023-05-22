import React from "react";

import LogInScreen from "../LogInScreen";
import SignUpScreen from "../SignUpScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
