import React, { useState, useContext } from "react";
import { Text, View } from "react-native";

export const Title = ({ title }) => {
  return <Styled_Title>{title}</Styled_Title>;
};

const Styled_Title = styled(Text)`
  font-size: 30px;
`;
