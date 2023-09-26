import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AccountScreen,
  LoginScreen,
  RegisterScreen,
} from "../../features/account/screens";

const Stack = createStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
