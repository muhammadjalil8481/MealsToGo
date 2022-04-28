import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { View, Text, StyleSheet, Image } from "react-native";

export const Styled_CardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const Styled_Card = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const Styled_NameText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
export const Styled_AddressText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const Styled_Info = styled(View)`
  margin-top: ${(props) => props.theme.space[1]};
`;
export const Styled_Rating = styled(View)`
  flex-direction: row;
  margin: ${(props) => props.theme.space[2]} 0;
  width: 20px;
  height: 20px;
`;
export const Styled_OpenStatus = styled(View)``;
export const Styled_OpenNow = styled(View)`
  width: 40px;
  height: 40px;
`;
export const Styled_Closed = styled(View)``;
export const Styled_ClosedText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.button};
  color: ${(props) => props.theme.colors.ui.error};
`;
export const Styled_svg = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
