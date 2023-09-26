import React from "react";
import { Button } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
  AccountOpacity,
} from "../components/account.styles";
import colors from "../../../infrastructure/theme/colors";

export default function AccountScreen({ navigation }: any) {
  return (
    <AccountBackground source={{}}>
      <AccountOpacity />
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
          icon="lock-open-outline"
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
