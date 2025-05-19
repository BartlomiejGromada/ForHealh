import TextStyled from "@/components/ui/TextStyled";
import { EditIcon, Trash2Icon, XIcon } from "lucide-react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import ActionButton from "../components/ActionButton";

type VisistOptionsCardProps = {
  visitId: string;
};

export default function VisistOptionsCard({ visitId }: VisistOptionsCardProps) {
  const { t } = useTranslation();

  return (
    <View className="flex justify-center bg-card-light dark:bg-card-dark p-4 rounded-lg gap-4">
      <TextStyled
        type="bold"
        className="text-xl dark:color-typography-white">{`${t("visits.additional-options")}:`}</TextStyled>

      <ActionButton text={t("common.edit")} Icon={EditIcon} action="edit" />
      <ActionButton text={t("visits.cancel-visit")} Icon={XIcon} action="cancel" />
      <ActionButton text={t("visits.remove-visit")} Icon={Trash2Icon} action="remove" />
    </View>
  );
}
