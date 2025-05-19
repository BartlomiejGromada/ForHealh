import TextStyled from "@/components/ui/TextStyled";
import { COLORS } from "@/constants/Colors";
import { LucideIcon } from "lucide-react-native";
import React from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";

type ActionButtonProps = {
  text: string;
  action: "cancel" | "edit" | "remove";
  isLoading?: boolean;
  disabled?: boolean;
  Icon: LucideIcon;
};

export default function ActionButton({
  text,
  action,
  isLoading,
  disabled,
  Icon,
}: ActionButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View
        className={`flex flex-row justify-between items-center gap-2 p-4 border border-primary-500 rounded-md bg-card-light dark:bg-card-dark ${disabled && "opacity-60"}`}>
        <TextStyled className={"text-typography-dark dark:text-typography-white pl-3"}>
          {text}
        </TextStyled>

        {isLoading ? (
          <ActivityIndicator
            className={`${action === "remove" ? "color-red-500" : action === "cancel" ? "color-orange-500" : "color-secondary-500"}`}
          />
        ) : (
          <Icon
            color={`${action === "remove" ? "red" : action === "cancel" ? "orange" : COLORS.secondary[500]}`}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
