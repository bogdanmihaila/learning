import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "../theme";
import Input from "./Input";

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchInput = ({
  value,
  onChangeText,
  placeholder,
}: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.inputWithIcon}
      />
      <View style={styles.iconContainer}>
        <Ionicons name="search" size={24} color={theme.colors.searchIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
  inputWithIcon: {
    paddingRight: theme.spacing.spacing_40,
  },
  iconContainer: {
    position: "absolute",
    right: theme.spacing.spacing_16,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchInput;
