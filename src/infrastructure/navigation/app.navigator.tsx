import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import theme from "../theme";
import { SafeArea } from "../../components/utility";
import { Ionicons, Feather } from "@expo/vector-icons";
import RestaurantsNavigator from "./restaurants.navigator";
import { MapScreen } from "../../features/map";

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

function RestaurantsIcon({ color }: { color: string }) {
  return <Ionicons name="fast-food-outline" size={24} color={color} />;
}
function MapIcon({ color }: { color: string }) {
  return <Feather name="map" size={24} color={color} />;
}
function SettingsIcon({ color }: { color: string }) {
  return <Feather name="settings" size={24} color={color} />;
}

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.brand.secondary,
          tabBarInactiveTintColor: theme.colors.brand.muted,
          tabBarStyle: { backgroundColor: theme.colors.brand.primary },
        }}
      >
        <Tab.Screen
          name="Home"
          component={RestaurantsNavigator}
          options={{ tabBarIcon: RestaurantsIcon }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{ tabBarIcon: MapIcon }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ tabBarIcon: SettingsIcon }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
