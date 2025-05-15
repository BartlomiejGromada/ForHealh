import TextStyled from "@/components/ui/TextStyled";
import { COLORS } from "@/constants/Colors";
import { formatDateTime } from "@/helpers/dates";
import { doctorTypeTranslationKeys } from "@/helpers/enums";
import { DoctorProfession } from "@/types/Visit";
import { ClockIcon, HandIcon, StethoscopeIcon } from "lucide-react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, View } from "react-native";
import { ContainerCard } from "../components/ContainerCard";
import ContainerSection from "../components/ContainerSection";
import useUpcomingVisits from "../hooks/useUpcomingVisits";
import { router } from "expo-router";

export default function UpcomingVisits() {
  const { t } = useTranslation();
  const UPCOMING_VISITS_COUNT = 3;

  const { visits, isLoading } = useUpcomingVisits({ count: UPCOMING_VISITS_COUNT });

  return (
    <ContainerSection
      title={t("home.upcoming-visits")}
      onPressAction={() => {
        router.navigate("/standalone/visits-list");
      }}>
      <View className="flex gap-y-4">
        {isLoading ? (
          <ActivityIndicator size={"large"} className="color-primary-300" />
        ) : (
          visits.map(visit => (
            <ContainerCard
              key={visit.id}
              Icon={
                visit.doctor.profession === DoctorProfession.Physiotherapist
                  ? HandIcon
                  : StethoscopeIcon
              }
              title={t(doctorTypeTranslationKeys[visit.doctor.profession])}
              subtitle={`${visit.doctor.name}`}
              description={
                <View className="flex flex-row items-center gap-x-1">
                  <ClockIcon size={14} color={COLORS.typography[400]} />
                  <TextStyled className="text-sm color-typography-400">
                    {formatDateTime(visit.date)}
                  </TextStyled>
                </View>
              }
              onPress={() =>
                router.push({
                  pathname: "/standalone/visit-details",
                  params: {
                    id: visit.id,
                  },
                })
              }
            />
          ))
        )}
      </View>
    </ContainerSection>
  );
}
