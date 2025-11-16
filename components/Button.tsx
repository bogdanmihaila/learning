import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../theme/colors";

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
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  largeButton: {
    paddingVertical: 16,
  },
  smallButton: {
    paddingVertical: 12,
  },
  primaryButton: {
    backgroundColor: colors.primaryButtonBackground,
  },
  secondaryButton: {
    backgroundColor: colors.secondaryButtonBackground,
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
    color: colors.primaryButtonText,
  },
  secondaryText: {
    color: colors.secondaryButtonText,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
