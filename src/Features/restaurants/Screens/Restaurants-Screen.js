import React, { useContext } from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../Components/Restaurant-Info-Card";
import { Styled_SafeAreaConatainer } from "../Components/utility/SafeArea-Component";
import { RestaurantsContext } from "../../../Services/Restaurants/Restaurant.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../Components/Search.Component";

export const RestaurantsScreen = () => {
  const { restaurants, error, isLoading } = useContext(RestaurantsContext);
  // const isLoading = restaurantsContext.isLoading;
  return (
    <Styled_SafeAreaConatainer>
      <Search />
      {isLoading ? (
        <Styled_Center_View>
          <ActivityIndicator
            animating={true}
            color={Colors.red800}
            size="large"
          />
        </Styled_Center_View>
      ) : null}
      {/* <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard Restaurant={item} />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      ></FlatList> */}
    </Styled_SafeAreaConatainer>
  );
};

const Styled_Center_View = styled(View)`
  position: absolute;
  top: 45%;
  left: 45%;
`;
