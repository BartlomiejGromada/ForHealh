import clsx from "clsx";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import TextStyled, { TextType } from "./TextStyled";

type TextPressableProps = TouchableOpacityProps & {
  text: string;
  type?: TextType;
  classNameText?: string;
};

export default function TextPressable({
  text,
  type = "regular",
  classNameText,
  ...rest
}: TextPressableProps) {
  return (
    <TouchableOpacity activeOpacity={0.6} {...rest}>
      <TextStyled
        className={clsx("color-primary-500", classNameText)}
        type={type}
      >
        {text}
      </TextStyled>
    </TouchableOpacity>
  );
}
