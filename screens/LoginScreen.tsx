import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Text from "../components/Text";
import { theme } from "../theme";

export default function LoginScreen() {
  const { t } = useTranslation();

  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>{t("screens.login")}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.colors.text,
    fontSize: 24,
  },
});
