import React from "react";
import { Text, View } from "react-native";
import { ImageBg } from "../Components/ImageBackground";
import styled from "styled-components/native";
import { ButtonComponent } from "../Components/Button";
import { colors } from "../../../infrastructure/theme/colors";
import { Title } from "react-native-paper";
import { TextComponent } from "../../../Components/Typography/text_Component";
import LottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <Styled_View>
      <ImageBg image={"../../../../assets/homeBg.jpg"} />
      <Styled_AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/Watermellon.json")}
        />
      </Styled_AnimationWrapper>
      <Styled_Title variant="label">Meals To Go</Styled_Title>
      <Styled_Container>
        <ButtonComponent
          text={"Login"}
          width={200}
          height={50}
          color={colors.brand.primary}
          icon="lock-open-outline"
          onPressFunction={() => navigation.navigate("Login")}
        />

        <ButtonComponent
          text={"Register"}
          width={200}
          height={50}
          color={colors.brand.primary}
          icon="email"
          onPressFunction={() => navigation.navigate("Register")}
        />
      </Styled_Container>
    </Styled_View>
  );
};

const Styled_Container = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
`;
const Styled_View = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Styled_AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
const Styled_Title = styled(TextComponent)`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 15px;
`;
