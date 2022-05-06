import react from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";
import { TextComponent } from "./Typography/text_Component";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";

export const FavouriteRestaurantCard = ({ restaurant }) => {
  return (
    <Styled_Card>
      <Styled_CardCoverImage source={{ uri: restaurant.photos[0] }} />
      <Styled_TextComponent variant="caption">
        {restaurant.name}
      </Styled_TextComponent>
      {/* <Text>Hello</Text> */}
    </Styled_Card>
  );
};

const Styled_Card = styled(View)`
  width: 90px;
  padding: 10px;
  align-items: center;
`;
const Styled_CardCoverImage = styled(Image)`
  border-radius: 32.5px;
  width: 65px;
  height: 65px;
  margin-bottom: 8px;
`;
const Styled_TextComponent = styled(TextComponent)`
  text-align: center;
`;
