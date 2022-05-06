import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../Features/restaurants/Screens/Restaurants-Screen";
import { RestaurantDetails } from "../../Features/restaurants/Screens/RestaurantDetails";

export const RestaurantsStack = () => {
  const restaurantStack = createStackNavigator();
  return (
    <restaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <restaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <restaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
      />
    </restaurantStack.Navigator>
  );
};
