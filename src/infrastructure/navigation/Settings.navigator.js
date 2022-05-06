import React from "react";
import { Settings } from "../../Features/Settings/Screens/Settings-Screen";
import { StyleSheet, Text, View } from "react-native";
import { FavouritesScreen } from "../../Features/Settings/Screens/Favourites-Screen";
import { CameraScreen } from "../../Features/Settings/Screens/Camera-Screen";
import styled from "styled-components/native";
import { StatusBarMargin } from "../../Features/restaurants/Components/utility/SafeArea-Component";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();
export const SettingsNavigator = ({ route, navigation }) => {
  
  return (
    <>
      <StatusBarMargin>
        <SettingsStack.Navigator
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            // headerShown: false,
          }}
        >
          <SettingsStack.Screen name="Settings" component={Settings} />
          <SettingsStack.Screen
            name="Favourites"
            component={FavouritesScreen}
          />
          <SettingsStack.Screen
            name="Camera"
            component={CameraScreen}
            options={{ header: () => null }}
            
          />
        </SettingsStack.Navigator>
      </StatusBarMargin>
    </>
  );
};

const Spacer = styled(View)`
  margin-top: 20px;
`;
