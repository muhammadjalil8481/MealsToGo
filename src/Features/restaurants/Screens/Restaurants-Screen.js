import React, { useContext, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../Components/Restaurant-Info-Card";
import { Styled_SafeAreaConatainer } from "../Components/utility/SafeArea-Component";
import { RestaurantsContext } from "../../../Services/Restaurants/Restaurant.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../Components/Search.Component";
import { FavouritesBar } from "../../../Components/FavBar";
import { FavouritesContext } from "../../../Services/Favourites/Favourites.Context";
import { FadeInView } from "../../../Components/Animations/fadeAnimation";

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, error, isLoading, retrieveRestaurants, location } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const locationString = location
      ? `${location.lat},${location.lng}`
      : "37.7749295,-122.4194155";
    retrieveRestaurants(locationString);
  }, [location]);

  const [isFavToggled, setIsFavToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);
  return (
    <Styled_SafeAreaConatainer>
      <Search isFavToggled={isFavToggled} setIsFavToggled={setIsFavToggled} />
      {isFavToggled && (
        <FavouritesBar
          favourites={favourites}
          onPressFunction={navigation.navigate}
        />
      )}
      {isLoading ? (
        <Styled_Center_View>
          <ActivityIndicator
            animating={true}
            color={Colors.red800}
            size="large"
          />
        </Styled_Center_View>
      ) : (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", {
                  restaurantData: item,
                })
              }
            >
              <FadeInView duration={800}>
                <RestaurantInfoCard Restaurant={item} />
              </FadeInView>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        ></FlatList>
      )}
    </Styled_SafeAreaConatainer>
  );
};

const Styled_Center_View = styled(View)`
  position: absolute;
  top: 45%;
  left: 45%;
`;
