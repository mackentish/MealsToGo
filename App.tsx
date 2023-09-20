import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text>Search</Text>
      </View>

      <View style={styles.list}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16,
    flexDirection: "row",
    backgroundColor: "green",
  },
  list: {
    padding: 16,
    flex: 1,
    backgroundColor: "blue",
  },
});
