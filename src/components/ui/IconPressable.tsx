import { COLORS } from "@/constants/Colors";
import { LucideIcon } from "lucide-react-native";
import React from "react";
import {
  ColorValue,
  PressableProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type IconPressableProps = TouchableOpacityProps & {
  Icon: LucideIcon;
  color?: ColorValue;
};

export default function IconPressable({
  Icon,
  color,
  ...rest
}: IconPressableProps) {
  const defaultColor = COLORS.primary[500];

  return (
    <TouchableOpacity activeOpacity={0.6} {...rest}>
      <Icon color={color ?? defaultColor} />
    </TouchableOpacity>
  );
}
