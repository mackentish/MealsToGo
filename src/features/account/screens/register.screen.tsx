import React from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountOpacity,
  Title,
} from "../components/account.styles";
import { Button } from "react-native-paper";
import colors from "../../../infrastructure/theme/colors";

export default function RegisterScreen({ navigation }: { navigation: any }) {
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
          onPress={() => console.log("Pressed")}
        >
          Register
        </Button>
        <Button
          icon="keyboard-backspace"
          buttonColor={colors.brand.secondary}
          textColor={colors.brand.primary}
          mode="contained"
          onPress={() => navigation.goBack()}
        >
          Back
        </Button>
      </AccountContainer>
    </AccountBackground>
  );
}
