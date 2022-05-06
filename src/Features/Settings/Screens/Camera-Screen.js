import React, { useState, useEffect, useRef, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../Services/Authentication/authentication.context";
import { MaterialIcons } from "@expo/vector-icons";

export const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const cameraRef = useRef(null);
  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      // console.log(photo);
      try {
        await AsyncStorage.setItem(`@photo-${user.uid}`, photo.uri);
        navigation.goBack();
      } catch (e) {
        console.log("error storing", e);
      }
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>No Permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Styled_Camera
      type={type}
      ref={(camera) => (cameraRef.current = camera)}
      ratio={"16:9"}
    >
      <Styled_buttonContainer>
        <Styled_Button onPress={snap}></Styled_Button>
      </Styled_buttonContainer>
      <Styled_IconContainer>
        <TouchableOpacity
          onPress={() =>
            setType(
              type === Camera.Constants.Type.front
                ? Camera.Constants.Type.back
                : Camera.Constants.Type.front
            )
          }
        >
          <MaterialIcons name="flip-camera-android" size={32} color="white" />
        </TouchableOpacity>
      </Styled_IconContainer>
    </Styled_Camera>
  );
};

const Styled_Container = styled(View)`
  flex: 1;
`;
const Styled_Camera = styled(Camera)`
  width: 100%;
  height: 100%;
`;
const Styled_buttonContainer = styled(View)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 2px solid white;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 45%;
  bottom: 3%;
`;
const Styled_IconContainer = styled(View)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  /* border: 2px solid white; */
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 5%;
  bottom: 3%;
`;
const Styled_Button = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
`;
const Styled_Text = styled.Text`
  font-size: 18px;
`;
