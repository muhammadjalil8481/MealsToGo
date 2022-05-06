import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

export const ButtonComponent = ({
  text = "Click",
  width = 200,
  height = 50,
  color = colors.brand.primary,
  icon,
  onPressFunction,
}) => {
  return (
    <>
      <Styled_Spacer />
      <Styled_Btn
        icon={icon}
        mode="contained"
        style={{ width: width, height: height }}
        color={color}
        onPress={() => onPressFunction()}
      >
        {text}
      </Styled_Btn>
      <Styled_Spacer />
    </>
  );
};

const Styled_Btn = styled(Button)`
  align-items: center;
  justify-content: center;
`;

const Styled_Spacer = styled(View)`
  margin-top: 12px;
`;
