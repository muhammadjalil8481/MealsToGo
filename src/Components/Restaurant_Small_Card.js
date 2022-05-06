import react from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";
import { TextComponent } from "./Typography/text_Component";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";

export const RestaurantSmallCard = ({ restaurant }) => {
  return (
    <Styled_Card>
      {Platform.OS === "android" ? (
        <Styled_CardCoverWebView source={{ uri: restaurant.photos[0] }} />
      ) : (
        <Styled_CardCoverImage source={{ uri: restaurant.photos[0] }} />
      )}

      {/* <Styled_TextWrapper> */}
      <TextComponent variant="caption">{restaurant.name}</TextComponent>
      {/* </Styled_TextWrapper> */}
    </Styled_Card>
  );
};

const Styled_Card = styled(View)`
  width: 120px;
  height: 200px;
  padding: 10px;
  align-items: center;
`;
const Styled_CardCoverImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 110px;
  margin-bottom: 8px;
`;
const Styled_CardCoverWebView = styled(WebView)`
  border-radius: 10px;
  min-width: 120px;
  min-height: 100px;
  margin-bottom: 8px;
`;

// const Styled_TextWrapper = styled(View)`
//   max-height: 20px;
// `;
