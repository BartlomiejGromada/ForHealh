import TextPressable from "@/components/ui/TextPressable";
import TextStyled from "@/components/ui/TextStyled";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

export default function ContainerSection({
  title,
  onPressAction,
  children,
}: {
  title: string;
  onPressAction: () => void;
  children: React.ReactNode;
}) {
  const { t } = useTranslation();

  return (
    <View className="w-100 gap-y-4">
      <View className="flex flex-row justify-between items-center">
        <TextStyled type="bold" className="text-lg dark:text-typography-white">
          {title}
        </TextStyled>

        <TextPressable text={t("home.see-all")} onPress={onPressAction} />
      </View>

      {children}
    </View>
  );
}
