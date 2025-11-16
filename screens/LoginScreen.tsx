import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Screen from "../components/Screen";
import Text from "../components/Text";
import { useAppRoute } from "../hooks/useAppNavigation";
import { theme } from "../theme";

export default function LoginScreen() {
  const { t } = useTranslation();
  const route = useAppRoute<"Login">();
  const { schoolName } = route.params;

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    console.log("Handle login");
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.schoolName}>{schoolName}</Text>
        <View style={styles.inputsContainer}>
          <Input
            value={username}
            onChangeText={setUsername}
            placeholder={t("inputs.username")}
          />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder={t("inputs.password")}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={t("buttons.login")}
            onPress={handleLogin}
            variant="primary"
            size="small"
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.spacing.spacing_120,
    paddingBottom: theme.spacing.spacing_72,
  },
  content: {
    width: "100%",
  },
  schoolName: {
    fontSize: theme.typography.big,
    fontWeight: "600",
    color: theme.colors.text,
    textAlign: "center",
    marginBottom: theme.spacing.spacing_48,
  },
  inputsContainer: {
    gap: theme.spacing.spacing_16,
    marginBottom: theme.spacing.spacing_24,
  },
  buttonContainer: {
    width: "100%",
  },
});
