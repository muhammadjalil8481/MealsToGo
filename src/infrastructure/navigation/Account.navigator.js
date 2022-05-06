import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../Features/Account/Screens/Account";
import { LoginScreen } from "../../Features/Account/Screens/Login";
import { RegisterScreen } from "../../Features/Account/Screens/Register";

export const AccountNavigator = () => {
  const AccountStack = createStackNavigator();
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountStack.Screen name="Main" component={AccountScreen} />
      <AccountStack.Screen name="Login" component={LoginScreen} />
      <AccountStack.Screen name="Register" component={RegisterScreen} />
    </AccountStack.Navigator>
  );
};
