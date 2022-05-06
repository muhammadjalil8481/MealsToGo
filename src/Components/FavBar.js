import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components/native";
import { FavouriteRestaurantCard } from "./Fav_ResCard";

export const FavouritesBar = ({ favourites, onPressFunction }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <Styled_FavouritesWrapper>
      <Styled_FavItem>
        {/* <FavouriteRestaurantCard restaurant={favourites[0]} /> */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites.map((fav, index) => {
            return (
              <TouchableOpacity
                key={`${fav.name}+${index}`}
                onPress={() =>
                  onPressFunction("RestaurantDetails", { restaurantData: fav })
                }
              >
                <FavouriteRestaurantCard restaurant={fav} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Styled_FavItem>
    </Styled_FavouritesWrapper>
  );
};

const Styled_FavouritesWrapper = styled(View)`
  padding: 0px 10px;
`;
const Styled_FavItem = styled(View)`
  margin-right: 10px;
`;
