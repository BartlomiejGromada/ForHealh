import TextStyled from "@/components/ui/TextStyled";
import { COLORS } from "@/constants/Colors";
import { LucideIcon, SquareActivityIcon, HeartIcon } from "lucide-react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

export default function Summary() {
  const { t } = useTranslation();

  return (
    <View className="gap-y-4">
      <View className="flex flex-row justify-between gap-x-2">
        <SummarySquare Icon={HeartIcon} count={2} text={t("home.upcoming-visits")} />
        <SummarySquare Icon={SquareActivityIcon} count={4} text={t("home.training-this-week")} />
      </View>
    </View>
  );
}

function SummarySquare({ Icon, count, text }: { Icon: LucideIcon; count: number; text: string }) {
  return (
    <View className="flex items-center gap-y-1 bg-card-light dark:bg-card-dark rounded-lg p-4 w-1/2 h-28">
      {<Icon color={COLORS.primary[500]} />}
      <TextStyled type="bold" className="text-2xl dark:text-typography-white">
        {count}
      </TextStyled>
      <TextStyled className="text-xs color-typography-400">{text}</TextStyled>
    </View>
  );
}
