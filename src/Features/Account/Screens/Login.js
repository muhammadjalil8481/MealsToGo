import React, { useState, useContext } from "react";
import { Text, View } from "react-native";
import { ImageBg } from "../Components/ImageBackground";
import styled from "styled-components/native";
import { TextInput, ActivityIndicator, Colors } from "react-native-paper";
import { ButtonComponent } from "../Components/Button";
import { colors } from "../../../infrastructure/theme/colors";
import { AuthenticationContext } from "../../../Services/Authentication/authentication.context";
import { Button } from "react-native-paper";
import { TextComponent } from "../../../Components/Typography/text_Component";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <>
      <Styled_View>
        <ImageBg image={"../../../../assets/homeBg.jpg"} />
        <Styled_Title variant="label">Meals To Go</Styled_Title>

        <Styled_Container>
          <AuthInput
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
          <Styled_Spacer />
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Styled_Container>
        {error && <TextComponent variant="error">{error}</TextComponent>}
        {isLoading ? (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        ) : (
          <ButtonComponent
            text="Login"
            width={200}
            height={50}
            color={colors.brand.primary}
            icon="lock-open-outline"
            onPressFunction={() => onLogin(email, password)}
          />
        )}
        <ButtonComponent
          text="Back"
          width={200}
          height={50}
          color={colors.brand.primary}
          icon="lock-open-outline"
          onPressFunction={() => navigation.navigate("Main")}
        />
      </Styled_View>
    </>
  );
};

const Styled_View = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Styled_Container = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-bottom: 8px;
`;
const AuthInput = styled(TextInput)`
  width: 300px;
`;
const Styled_Spacer = styled(View)`
  margin-top: 16px;
`;
const Styled_Title = styled(TextComponent)`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 15px;
`;
