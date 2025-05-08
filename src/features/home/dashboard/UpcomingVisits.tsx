import { COLORS } from "@/constants/Colors";
import { Visit } from "@/types/Visit";
import { ClockIcon, HandIcon, StethoscopeIcon } from "lucide-react-native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { ContainerCard } from "../components/ContainerCard";
import ContainerSection from "../components/ContainerSection";
import { useTranslation } from "react-i18next";
import TextStyled from "@/components/ui/TextStyled";

export default function UpcomingVisits() {
  const { t } = useTranslation();

  // TODO
  const [visitsMock, setVisitsMock] = useState<Visit[]>([
    {
      id: 1,
      Icon: StethoscopeIcon,
      specialization: "Kardiolog",
      doctor: "dr Anna Kowalska",
      date: new Date(),
    },
    {
      id: 2,
      Icon: HandIcon,
      specialization: "Rehabilitant",
      doctor: "dr Anna Kowalska",
      date: new Date(),
    },
  ]);

  return (
    <ContainerSection
      title={t("home.upcoming-visits")}
      onPressAction={() => {}}
    >
      <View className="flex gap-y-4">
        {visitsMock.map((visit) => (
          <ContainerCard
            key={visit.id}
            Icon={visit.Icon}
            title={visit.specialization}
            subtitle={visit.doctor}
            description={
              <View className="flex flex-row items-center gap-x-1">
                <ClockIcon size={14} color={COLORS.typography[400]} />
                <TextStyled className="text-sm color-typography-400">
                  {visit.date.toLocaleString()}
                </TextStyled>
              </View>
            }
          />
        ))}
      </View>
    </ContainerSection>
  );
}
