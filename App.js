import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Styled_SafeAreaConatainer } from "./src/Features/restaurants/Components/utility/SafeArea-Component";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/Features/restaurants/Screens/Restaurants-Screen";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantsContextProvider } from "./src/Services/Restaurants/Restaurant.context";
import { LocationContextProvider } from "./src/Services/Location/location.context";

const SettingsScreen = () => {
  return (
    <Styled_SafeAreaConatainer>
      <Text>Settings</Text>
    </Styled_SafeAreaConatainer>
  );
};
const MapScreen = () => {
  return <Text>Mapss</Text>;
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) return null;
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                initialRouteName="Restaurants"
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Restaurants") {
                      iconName = "md-restaurant";
                    } else if (route.name === "Settings") {
                      iconName = "md-settings";
                    } else if (route.name === "Maps") {
                      iconName = "md-map";
                    }

                    // You can return any component that you like here!
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "gray",
                })}
              >
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Maps" component={MapScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
