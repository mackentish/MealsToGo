import React, { useContext, useState } from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountOpacity,
  AuthInput,
  Title,
} from "../components/account.styles";
import { Text } from "../../../components/typography";
import { Button, ActivityIndicator } from "react-native-paper";
import colors from "../../../infrastructure/theme/colors";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export default function RegisterScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground source={{}}>
      <AccountOpacity />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        <AuthInput
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setRepeatedPassword(p)}
        />
        {error && <Text variant="error">{error}</Text>}
        {isLoading ? (
          <ActivityIndicator animating={true} color={colors.brand.primary} />
        ) : (
          <Button
            icon="lock-open-outline"
            buttonColor={colors.brand.primary}
            textColor={colors.brand.secondary}
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Register
          </Button>
        )}
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
