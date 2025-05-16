import TextStyled from "@/components/ui/TextStyled";
import { COLORS } from "@/constants/Colors";
import { CalendarIcon } from "lucide-react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

type VisitInformationsCardProps = {
  date: Date;
  isOnline: boolean;
  location?: string;
  comment: string;
};

export default function VisitInformationsCard({
  date,
  location,
  isOnline,
  comment,
}: VisitInformationsCardProps) {
  const { t } = useTranslation();

  return (
    <View className="flex justify-center bg-card-light dark:bg-card-dark p-4 rounded-lg gap-4">
      <TextStyled>{`${t("visits.information-about-visit")}:`}</TextStyled>

      <View className="flex flex-row items-center gap-2">
        <CalendarIcon color={COLORS.primary[500]} />
        <TextStyled type="bold" className="">
          {formatDate(date)}
        </TextStyled>
      </View>

      <TextStyled className="color-typography-500"></TextStyled>
    </View>
  );
}

const formatDate = (date: Date) => {
  const dateFormatted = date.toLocaleDateString("pl-PL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const timeFormatted = date.toLocaleDateString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${dateFormatted}, ${timeFormatted}`;
};
