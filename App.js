import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Styled_SafeAreaConatainer } from "./src/Features/restaurants/Components/utility/SafeArea-Component";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import * as firebase from "firebase";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { AuthenticationContextProvider } from "./src/Services/Authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyCbf8oTJYYsm5b9SxHrYbettU0FIT7dd-c",
  authDomain: "mealstogo-98e18.firebaseapp.com",
  projectId: "mealstogo-98e18",
  storageBucket: "mealstogo-98e18.appspot.com",
  messagingSenderId: "960244762468",
  appId: "1:960244762468:web:bd109be52b4d867b711c71",
};

// initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
