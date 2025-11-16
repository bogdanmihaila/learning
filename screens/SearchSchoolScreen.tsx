import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import Screen from "../components/Screen";
import { theme } from "../theme";

export default function SearchSchoolScreen() {
  const { t } = useTranslation();

  const handlePress = () => {
    console.log("Go to login");
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.content}>
        <View style={styles.spacer} />
        <Button
          title={t("buttons.continue")}
          onPress={handlePress}
          variant="secondary"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    paddingBottom: theme.spacing.spacing_72,
  },
  content: {
    width: "100%",
  },
  spacer: {
    height: theme.spacing.spacing_16,
  },
});
