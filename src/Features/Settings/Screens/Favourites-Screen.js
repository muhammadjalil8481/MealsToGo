import React, { useContext, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../../restaurants/Components/Restaurant-Info-Card";
import { Styled_SafeAreaConatainer } from "../../restaurants/Components/utility/SafeArea-Component";
import { ActivityIndicator, Colors } from "react-native-paper";
import { FavouritesContext } from "../../../Services/Favourites/Favourites.Context";
import { TextComponent } from "../../../Components/Typography/text_Component";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  if (!favourites.length) {
    return (
      <Styled_Center_View>
        <Styled_TextComponent variant="label">
          No Favourites Found
        </Styled_TextComponent>
      </Styled_Center_View>
    );
  }
  return (
    <Styled_SafeAreaConatainer>
      <FlatList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetails", {
                restaurantData: item,
              })
            }
          >
            <RestaurantInfoCard Restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      ></FlatList>
    </Styled_SafeAreaConatainer>
  );
};

const Styled_Center_View = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Styled_TextComponent = styled(TextComponent)`
  font-size: 20px;
`;
