import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

export const ImageBg = ({ image }) => {
  //   const image = require(imageUrl);
  //   const image = { uri: imageUrl };
  return (
    <Styled_ImageContainer>
      <Styled_BgImage
        source={require("../../../../assets/homeBg.jpg")}
        resizeMode="cover"
      ></Styled_BgImage>
      <Styled_ImgOverlay />
    </Styled_ImageContainer>
  );
};

const Styled_ImageContainer = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Styled_BgImage = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Styled_ImgOverlay = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;
