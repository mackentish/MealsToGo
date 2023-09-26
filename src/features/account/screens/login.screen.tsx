import React, { useState, useContext } from "react";
import { Button, ActivityIndicator } from "react-native-paper";
import {
  AccountBackground,
  AccountOpacity,
  AccountContainer,
  AuthInput,
  Title,
} from "../components/account.styles";
import { Text } from "../../../components/typography";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import colors from "../../../infrastructure/theme/colors";

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
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
          onChangeText={(u: string) => setEmail(u)}
        />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p: string) => setPassword(p)}
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
            onPress={() => onLogin(email, password)}
          >
            Login
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
