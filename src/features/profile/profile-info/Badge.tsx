import React from "react";
import { Text, View } from "react-native";
import { UserIcon } from "lucide-react-native";
import { COLORS } from "@/constants/Colors";
import TextStyled from "@/components/ui/TextStyled";

// TODO: Implement logic
export default function Badge() {
  return (
    <View className="flex justify-center items-center gap-2">
      <View className="flex justify-center items-center rounded-full bg-primary-200 w-24 h-24">
        <UserIcon color={COLORS.primary[500]} size={35} />
      </View>
      <View className="flex items-center justify-center">
        <TextStyled type="bold" className="text-xl dark:text-typography-white">
          {"Jan Kowalski"}
        </TextStyled>
        <TextStyled className="text-typography-400">
          {"jan.kowalski@gamil.com"}
        </TextStyled>
      </View>
    </View>
  );
}
