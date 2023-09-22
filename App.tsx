import React from "react";
import { Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants";
import { ThemeProvider } from "styled-components";
import theme from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from "./src/components/utility";
import { Ionicons, Feather } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

function MapScreen() {
  return (
    <SafeArea>
      <Text>Map!</Text>
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

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider>
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
                name="Restaurants"
                component={RestaurantsScreen}
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
        </RestaurantsContextProvider>
      </LocationContextProvider>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
