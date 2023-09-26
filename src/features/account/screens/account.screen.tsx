import React from "react";
import { Button } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
  AccountOpacity,
  Title,
} from "../components/account.styles";
import colors from "../../../infrastructure/theme/colors";

export default function AccountScreen({ navigation }: any) {
  return (
    <AccountBackground source={{}}>
      <AccountOpacity />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <Button
          icon="lock-open-outline"
          buttonColor={colors.brand.primary}
          textColor={colors.brand.secondary}
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
        <Button
          icon="email"
          buttonColor={colors.brand.secondary}
          textColor={colors.brand.primary}
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
      </AccountContainer>
    </AccountBackground>
  );
}
