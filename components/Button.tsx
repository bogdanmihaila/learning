import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../theme";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  size?: "small" | "large";
  disabled?: boolean;
}

const Button = ({
  title,
  onPress,
  variant = "primary",
  size = "large",
  disabled = false,
}: ButtonProps) => {
  const isPrimary = variant === "primary";
  const isLarge = size === "large";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isLarge ? styles.largeButton : styles.smallButton,
        isPrimary ? styles.primaryButton : styles.secondaryButton,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.9}
    >
      <Text
        style={[
          styles.text,
          isLarge ? styles.largeText : styles.smallText,
          isPrimary ? styles.primaryText : styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingHorizontal: theme.spacing.spacing_24,
    borderRadius: theme.spacing.spacing_8,
    alignItems: "center",
    justifyContent: "center",
  },
  largeButton: {
    paddingVertical: theme.spacing.spacing_16,
  },
  smallButton: {
    paddingVertical: theme.spacing.spacing_12,
  },
  primaryButton: {
    backgroundColor: theme.colors.primaryButtonBackground,
  },
  secondaryButton: {
    backgroundColor: theme.colors.secondaryButtonBackground,
  },
  text: {
    fontWeight: "600",
  },
  largeText: {
    fontSize: 16,
  },
  smallText: {
    fontSize: 14,
  },
  primaryText: {
    color: theme.colors.primaryButtonText,
  },
  secondaryText: {
    color: theme.colors.secondaryButtonText,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
