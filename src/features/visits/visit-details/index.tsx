import ScreenWrapper from "@/components/ScreenWrapper";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text } from "react-native";

type VisitDetailsProps = {
  visitId: string;
};

export default function VisitDetails({ visitId }: VisitDetailsProps) {
  const { t } = useTranslation();

  return (
    <ScreenWrapper title={"Szczegóły wizyty"}>
      <Text>{`Szczegóły: ${visitId}`}</Text>
    </ScreenWrapper>
  );
}
