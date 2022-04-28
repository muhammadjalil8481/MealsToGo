import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import openNow from "../../../../assets/openNow";
import { TextComponent } from "../../../Components/Typography/text_Component";
import {
  Styled_CardCover,
  Styled_Card,
  Styled_NameText,
  Styled_AddressText,
  Styled_Closed,
  Styled_ClosedText,
  Styled_Info,
  Styled_OpenNow,
  Styled_OpenStatus,
  Styled_Rating,
  Styled_svg,
} from "./Restaurant-Info-Card_Styles";

export const RestaurantInfoCard = ({ Restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Food Street",
    isOpenNow = true,
    isClosedTemporarily = false,
    rating = 4.2,
  } = Restaurant;

  const ratingArray = new Array(Math.floor(rating)).fill(undefined);

  return (
    <View>
      <Styled_Card elevation={5}>
        <Styled_CardCover source={{ uri: photos[0] }} />
        <Styled_Info>
          <TextComponent variant="label">{name}</TextComponent>
          <Styled_svg>
            <Styled_Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} />
              ))}
            </Styled_Rating>
            <Styled_OpenStatus>
              {isOpenNow && (
                <Styled_OpenNow>
                  <SvgXml xml={openNow} />
                </Styled_OpenNow>
              )}
              {!isOpenNow && (
                <Styled_Closed>
                  <TextComponent variant="error">Closed</TextComponent>
                  <TextComponent variant="error">Temprarily</TextComponent>
                </Styled_Closed>
              )}
            </Styled_OpenStatus>
          </Styled_svg>
          <TextComponent
            variant="hint"
            style={!isOpenNow ? { marginTop: -15 } : null}
          >
            {address}
          </TextComponent>
        </Styled_Info>
      </Styled_Card>
    </View>
  );
};
