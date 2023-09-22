import React from "react";
import { Text, Platform } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants";
import { CenteredView } from "../../components/utility";

const RestaurantStack = createStackNavigator();

function DetailScreen() {
  return (
    <CenteredView>
      <Text>Detail Screen</Text>
      <Text>
        I'm not implementing this because I already know how to do all of this
        and would instead like to fast forward in the lessons to learn about
        maps
      </Text>
    </CenteredView>
  );
}

export default function RestaurantsNavigator() {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...(Platform.OS === "ios"
          ? TransitionPresets.ModalPresentationIOS
          : TransitionPresets.BottomSheetAndroid),
        gestureDirection: "vertical",
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={DetailScreen}
      />
    </RestaurantStack.Navigator>
  );
}
