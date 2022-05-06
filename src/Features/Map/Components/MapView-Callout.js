import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { RestaurantSmallCard } from "../../../Components/Restaurant_Small_Card";

export const MapViewCallout = ({ restaurant }) => {
  return <RestaurantSmallCard restaurant={restaurant} />;
};
