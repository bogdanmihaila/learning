import { useTranslation } from "react-i18next";
import { StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import { colors } from "../theme/colors";

export default function SearchSchoolScreen() {
  const { t } = useTranslation();

  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>{t("screens.searchSchool")}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.text,
    fontSize: 24,
  },
});
