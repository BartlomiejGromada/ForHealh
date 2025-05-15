import TextStyled from "@/components/ui/TextStyled";
import { COLORS } from "@/constants/Colors";
import { HeartIcon, LucideIcon, SquareActivityIcon } from "lucide-react-native";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, View } from "react-native";
import useUpcomingVisitsCount from "../hooks/useUpcomingVisitsCount";

export default function Summary() {
  const { t } = useTranslation();

  const { count, isLoading: isLoadingCount } = useUpcomingVisitsCount();

  return (
    <View className="gap-y-4">
      <View className="flex flex-row justify-between gap-x-2">
        <SummarySquare
          Icon={HeartIcon}
          count={count}
          text={t("home.upcoming-visits")}
          isLoading={isLoadingCount}
        />
        <SummarySquare
          Icon={SquareActivityIcon}
          count={4}
          text={t("home.training-this-week")}
          isLoading={false}
        />
      </View>
    </View>
  );
}

type SummarySquareProps = {
  Icon: LucideIcon;
  count: number;
  text: string;
  isLoading: boolean;
};

function SummarySquare({ Icon, count, text, isLoading }: SummarySquareProps) {
  return (
    <View className="flex items-center gap-y-1 bg-card-light dark:bg-card-dark rounded-lg p-4 w-1/2 h-28">
      {isLoading ? (
        <ActivityIndicator size={"large"} className="color-primary-300" />
      ) : (
        <Fragment>
          <Icon color={COLORS.primary[500]} />
          <TextStyled type="bold" className="text-2xl dark:text-typography-white">
            {count}
          </TextStyled>
          <TextStyled className="text-xs color-typography-400">{text}</TextStyled>
        </Fragment>
      )}
    </View>
  );
}
