import React from "react";
import { Appearance } from "react-native";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants";

const colorScheme = Appearance.getColorScheme();
const theme = {
  ...DefaultTheme,
  dark: colorScheme === "dark",
  colors: {
    ...DefaultTheme.colors,
    primary: "#AF5B5B",
    secondary: "#92CCFF",
    tertiary: "#ECDD7B",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </PaperProvider>
  );
}
