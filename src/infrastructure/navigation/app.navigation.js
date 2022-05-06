import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Styled_SafeAreaConatainer } from "../../Features/restaurants/Components/utility/SafeArea-Component";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantsStack } from "./Restaurants.stack";
import { RestaurantMap } from "../../Features/Map/Screens/Restaurant_Map";
import { ButtonComponent } from "../../Features/Account/Components/Button";
import { AuthenticationContext } from "../../Services/Authentication/authentication.context";
import { RestaurantsContextProvider } from "../../Services/Restaurants/Restaurant.context";
import { FavouritesContextProvider } from "../../Services/Favourites/Favourites.Context";
import { LocationContextProvider } from "../../Services/Location/location.context";
import { SettingsNavigator } from "./Settings.navigator";

export const AppNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            initialRouteName="Restaurants"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === "Restaurants") {
                  iconName = "md-restaurant";
                } else if (route.name === "Settings") {
                  iconName = "md-settings";
                } else if (route.name === "Maps") {
                  iconName = "md-map";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsStack} />
            <Tab.Screen
              name="Settings"
              component={SettingsNavigator}
              options={{ header: () => null }}
            />
            <Tab.Screen name="Maps" component={RestaurantMap} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
