import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
  Appearance,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components";

const colorScheme = Appearance.getColorScheme();

export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
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
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
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
