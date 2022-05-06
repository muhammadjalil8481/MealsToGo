import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

export const Styled_SafeAreaConatainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ? `8px` : 0};
  /* margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}; */
`;

export const Styled_SafeAreaConatainerWithPadding = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ? `8px` : 0};
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const StatusBarMargin = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0};
`;
