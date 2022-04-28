import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

export const Styled_SafeAreaConatainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ? `8px` : 0};
`;
