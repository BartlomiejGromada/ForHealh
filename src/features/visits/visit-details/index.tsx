import ScreenHeader from "@/components/ScreenHeader";
import ScreenWrapper from "@/components/ScreenWrapper";
import StandaloneScreenWrapper from "@/components/StandaloneScreenWrapper";
import { DoctorProfession, Visit, VisitStatus } from "@/types/Visit";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import VisistOptionsCard from "./VisistOptionsCard";
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
    status: VisitStatus.New,
    doctor: {
      name: "Dr. John Doe",
      profession: DoctorProfession.Cardiologist,
    },
    date: new Date("2025-05-20T14:30:00Z"),
    createdAt: new Date("2025-05-10T10:00:00Z"),
    location: "123 Medical Street, City, Country",
    comment: "Check-up for heart condition.",
  };

  return (
    <Fragment>
      <ScreenHeader title={t("visits.details-of-visit")} />

      <ScreenWrapper>
        <StandaloneScreenWrapper isLoading={false} isError={false}>
          <View className="flex gap-6">
            <VisitDoctorCard
              visitStatus={visit.status}
              doctorName={visit.doctor.name}
              doctorProfession={visit.doctor.profession}
            />

            <VisitInformationsCard
              date={visit.date}
              location={visit.location}
              comment={visit.comment}
            />

            <VisistOptionsCard visitId={visitId} />
          </View>
        </StandaloneScreenWrapper>
      </ScreenWrapper>
    </Fragment>
  );
}
