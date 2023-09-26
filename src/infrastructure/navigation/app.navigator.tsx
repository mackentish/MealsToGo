import React, { useContext } from "react";
import { Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import theme from "../theme";
import { SafeArea } from "../../components/utility";
import { Ionicons, Feather } from "@expo/vector-icons";
import RestaurantsNavigator from "./restaurants.navigator";
import { MapScreen } from "../../features/map";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

function SettingsScreen() {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings!</Text>
      <Button title="Sign Out" color="red" onPress={() => onLogout()} />
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
  );
}
