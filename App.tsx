import React, { useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import theme from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import Navigation from "./src/infrastructure/navigation";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBb3hmC-wwEQ7YBUh8GfYZdDCHdUqQaH20",
  authDomain: "mealstogo-8e4f9.firebaseapp.com",
  projectId: "mealstogo-8e4f9",
  storageBucket: "mealstogo-8e4f9.appspot.com",
  messagingSenderId: "67178592171",
  appId: "1:67178592171:web:0e1147fd0dccebbbdf04ee",
};

export default function App() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    initializeAuth(app);
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </AuthenticationContextProvider>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
