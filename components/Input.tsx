import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { theme } from "../theme";

interface InputProps extends TextInputProps {
  placeholder?: string;
}

const Input = ({ placeholder, style, ...props }: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.inputPlaceholder}
        allowFontScaling={false}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    width: "100%",
    paddingVertical: theme.spacing.spacing_16,
    paddingHorizontal: theme.spacing.spacing_16,
    backgroundColor: theme.colors.inputBackground,
    borderRadius: theme.spacing.spacing_8,
    color: theme.colors.inputText,
    fontSize: theme.typography.normal,
  },
});

export default Input;
