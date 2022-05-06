import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../Components/Search";
import { LocationContext } from "../../../Services/Location/location.context";
import { RestaurantsContext } from "../../../Services/Restaurants/Restaurant.context";
import { MapViewCallout } from "../Components/MapView-Callout";

export const RestaurantMap = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);
  const { lat, lng, viewport } = location;
  const [latDelta, setLatDelta] = useState(0);
  useEffect(() => {
    const northEastLat = viewport.northeast.lat;
    const southWestLat = viewport.southwest.lat;
    setLatDelta(northEastLat - southWestLat);
  }, [location]);

  return (
    <>
      <Search />
      <Styled_MapView
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants &&
          restaurants.map((res, index) => {
            return (
              <Marker
                key={`${index} + ${res.name}`}
                coordinate={{
                  latitude: res.geometry.location.lat,
                  longitude: res.geometry.location.lng,
                }}
                title={res.name}
              >
                <MapView.Callout
                  onPress={() => {
                    navigation.navigate("RestaurantDetails", {
                      restaurantData: res,
                    });
                  }}
                >
                  <MapViewCallout restaurant={res} />
                </MapView.Callout>
              </Marker>
            );
          })}
      </Styled_MapView>
    </>
  );
};

const Styled_MapView = styled(MapView)`
  height: 100%;
  width: 100%;
`;

// {restaurants.map((restaurant) => {
//   <MapView.Marker
//     key={restaurant.name}
//     title={restaurant.name}
//     coordinate={{
//       latitude: restaurant.geometry.location.lat,
//       longitude: restaurant.geometry.location.lng,
//     }}
//   >
//     <View>
//       <Text>Hello</Text>
//     </View>
//   </MapView.Marker>;
// })}
