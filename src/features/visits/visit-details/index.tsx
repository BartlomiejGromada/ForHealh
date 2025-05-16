import ScreenWrapper from "@/components/ScreenWrapper";
import { DoctorProfession, Visit } from "@/types/Visit";
import { Stack } from "expo-router";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, Text, View } from "react-native";
import VisitDoctorCard from "./VisitDoctorCard";
import VisitInformationsCard from "./VisitInformationsCard";

type VisitDetailsProps = {
  visitId: string;
};

export default function VisitDetails({ visitId }: VisitDetailsProps) {
  const { t } = useTranslation();

  // const { visit, isLoading } = useVisitDetails({ visitId });

  const visit: Visit = {
    id: "visit123",
    doctor: {
      name: "Dr. John Doe",
      profession: DoctorProfession.Cardiologist,
    },
    date: new Date("2025-05-20T14:30:00Z"),
    createdAt: new Date("2025-05-10T10:00:00Z"),
    isOnline: true,
    location: "123 Medical Street, City, Country",
    comment: "Check-up for heart condition.",
  };

  return (
    <Fragment>
      <Stack.Screen options={{ title: t("visits.details-of-visit") }} />
      <ScreenWrapper>
        {false ? (
          <ActivityIndicator size={"large"} />
        ) : visit ? (
          <View className="flex gap-6">
            <VisitDoctorCard
              doctorName={visit.doctor.name}
              doctorProfession={visit.doctor.profession}
            />

            <VisitInformationsCard
              date={visit.date}
              isOnline={visit.isOnline}
              location={visit.location}
              comment={visit.comment}
            />
          </View>
        ) : (
          <View>
            <Text>{"Coś poszło nie tak..."}</Text>
          </View>
        )}
      </ScreenWrapper>
    </Fragment>
  );
}
