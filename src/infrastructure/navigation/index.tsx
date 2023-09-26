import React, { useContext } from "react";
import AppNavigator from "./app.navigator";
import RestaurantsNavigator from "./restaurants.navigator";
import AccountNavigator from "./account.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";

export { RestaurantsNavigator };

export default function Navigation() {
  const { user } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
}
