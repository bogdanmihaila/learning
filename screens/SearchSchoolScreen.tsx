import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import Screen from "../components/Screen";
import SearchInput from "../components/SearchInput";
import SearchResultsList from "../components/SearchResultsList";
import Text from "../components/Text";
import { useSchoolSearch } from "../hooks/useSchoolSearch";
import { theme } from "../theme";

export default function SearchSchoolScreen() {
  const { t } = useTranslation();
  const {
    searchQuery,
    selectedSchool,
    isInputFocused,
    filteredSchools,
    handleSearchChange,
    handleSelectSchool,
    handleCloseList,
    handleFocus,
    handleBlur,
  } = useSchoolSearch();

  const handlePress = () => {
    console.log("Go to login ", selectedSchool);
  };

  const canShowButton = selectedSchool && !isInputFocused;

  return (
    <Screen
      style={[styles.container, isInputFocused && styles.containerFocused]}
    >
      <View style={styles.content}>
        {!isInputFocused && (
          <Text style={styles.title}>{t("screens.searchSchool")}</Text>
        )}
        <View style={styles.searchContainer}>
          <SearchInput
            value={selectedSchool || searchQuery}
            onChangeText={handleSearchChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={t("inputs.searchSchool")}
          />
          {filteredSchools.length > 0 && !selectedSchool && (
            <SearchResultsList
              results={filteredSchools}
              onSelectResult={handleSelectSchool}
              onClose={handleCloseList}
              style={
                isInputFocused ? styles.resultsListFocused : styles.resultsList
              }
            />
          )}
        </View>
        {!isInputFocused && (
          <Text style={styles.info}>{t("helpers.addMoreSchools")}</Text>
        )}
      </View>
      {canShowButton && (
        <View style={styles.buttonContainer}>
          <Button
            title={t("buttons.continue")}
            onPress={handlePress}
            variant="secondary"
          />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingBottom: theme.spacing.spacing_72,
    paddingTop: theme.spacing.spacing_120,
  },
  containerFocused: {
    paddingTop: theme.spacing.spacing_72,
  },
  content: {
    width: "100%",
  },
  title: {
    fontSize: theme.typography.big,
    fontWeight: "600",
    color: theme.colors.text,
    textAlign: "center",
    marginBottom: theme.spacing.spacing_48,
  },
  searchContainer: {
    position: "relative",
    width: "100%",
    zIndex: 10,
  },
  info: {
    fontSize: theme.typography.normal,
    color: theme.colors.text,
    textAlign: "center",
    marginTop: theme.spacing.spacing_32,
  },
  resultsList: {
    position: "absolute",
    top: theme.spacing.spacing_72,
    left: 0,
    right: 0,
    zIndex: 20,
  },
  resultsListFocused: {
    marginTop: theme.spacing.spacing_16,
  },
  buttonContainer: {
    width: "100%",
  },
});
