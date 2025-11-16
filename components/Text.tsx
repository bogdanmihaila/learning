import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

interface TextProps extends RNTextProps {
  children: React.ReactNode;
}

const Text = ({ children, ...props }: TextProps) => {
  return (
    <RNText allowFontScaling={false} {...props}>
      {children}
    </RNText>
  );
};

export default Text;

