import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AccountNavigator } from "./Account.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./app.navigation";
import { AuthenticationContext } from "../../Services/Authentication/authentication.context";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
