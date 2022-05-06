import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import { Styled_SafeAreaConatainer } from "../../restaurants/Components/utility/SafeArea-Component";
import { AuthenticationContext } from "../../../Services/Authentication/authentication.context";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { TextComponent } from "../../../Components/Typography/text_Component";

export const Settings = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);
  const getProfilePicture = async () => {
    const photouri = await AsyncStorage.getItem(`@photo-${user.uid}`);
    setPhoto(photouri);
  };
  useFocusEffect(() => {
    getProfilePicture();
  }, [user]);
  return (
    <Styled_SafeAreaConatainer>
      <Styled_AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {photo ? (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          ) : (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}
        </TouchableOpacity>
        <Styled_Spacer />
        <TextComponent variant="body">{user.email}</TextComponent>
      </Styled_AvatarContainer>
      <List.Section>
        <Styled_SettingsItem
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <Styled_SettingsItem
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </Styled_SafeAreaConatainer>
  );
};

const Styled_SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const Styled_AvatarContainer = styled.View`
  align-items: center;
`;
const Styled_Spacer = styled(View)`
  margin-top: 4px;
`;
