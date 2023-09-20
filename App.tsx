import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Appearance,
} from "react-native";
import { PaperProvider, DefaultTheme, Searchbar } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

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
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search"
            style={styles.searchBar}
            icon="heart-outline"
          />
        </View>

        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colorScheme === "dark" ? "black" : "white",
  },
  search: {
    padding: 16,
    flexDirection: "row",
    backgroundColor: "green",
  },
  searchBar: {
    flex: 1,
  },
  list: {
    padding: 16,
    flex: 1,
    backgroundColor: "blue",
  },
});
