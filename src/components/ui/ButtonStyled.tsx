import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import TextStyled from "./TextStyled";

type ButtonStyledProps = TouchableOpacityProps & {
  text: string;
  type?: "primary" | "outlined";
};

export default function ButtonStyled({
  text,
  type = "primary",
  ...rest
}: ButtonStyledProps) {
  const styles = {
    primary: "bg-primary-500",
    outlined: "border border-primary-500 bg-card-light dark:bg-card-dark ",
  };

  return (
    <TouchableOpacity activeOpacity={0.6} {...rest}>
      <View
        className={`rounded-md flex justify-center items-center p-4 ${styles[type]}`}
      >
        <TextStyled
          className={`${type === "primary" ? "text-typography-white dark:text-black" : "text-primary-500"}`}
        >
          {text}
        </TextStyled>
      </View>
    </TouchableOpacity>
  );
}
