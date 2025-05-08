import TextStyled from "@/components/ui/TextStyled";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

// TODO: Implement Calendar component + logic
export default function CalendarWrapper() {
  const { t } = useTranslation();

  return (
    <View className="gap-y-4">
      <View className="flex justify-center items-center bg-card-light dark:bg-card-dark h-80 rounded-lg">
        <TextStyled className="text-gray-300">
          {t("calendar.calendar")}
        </TextStyled>
      </View>
    </View>
  );
}
