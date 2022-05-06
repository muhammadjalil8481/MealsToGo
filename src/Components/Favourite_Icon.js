import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../Services/Favourites/Favourites.Context";
import { useEffect } from "react/cjs/react.production.min";

const Styled_FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const FavouriteIcon = ({ restaurant }) => {
  const { favourites, addFavourite, removeFavourite } =
    useContext(FavouritesContext);
  const isFavourite = favourites.find((x) => x.placeId === restaurant.placeId);

  const favouriteAction = () => {
    !isFavourite ? addFavourite(restaurant) : removeFavourite(restaurant);
    console.log("fav", favourites.length);
  };

  return (
    <Styled_FavouriteButton>
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        onPress={favouriteAction}
        // name="hearto"
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </Styled_FavouriteButton>
  );
};
