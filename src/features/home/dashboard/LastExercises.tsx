import TextStyled from "@/components/ui/TextStyled";
import { Exercise } from "@/types/Exercise";
import { SquareActivityIcon } from "lucide-react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { ContainerCard } from "../components/ContainerCard";
import ContainerSection from "../components/ContainerSection";

export default function LastExercises() {
  const { t } = useTranslation();
  // TODO
  const [exercisesMock, setExercisesMock] = useState<Exercise[]>([
    {
      id: 1,
      name: "Trening siłowy",
      date: new Date(),
      durationInMin: 45,
      intensity: "Wysoka",
    },
    {
      id: 2,
      name: "Rozciąganie",
      date: new Date(),
      durationInMin: 20,
      intensity: "Niska",
    },
    {
      id: 3,
      name: "Trening siłowy 2",
      date: new Date(),
      durationInMin: 45,
      intensity: "Wysoka",
    },
    {
      id: 4,
      name: "Rozciąganie 2",
      date: new Date(),
      durationInMin: 20,
      intensity: "Niska",
    },
  ]);

  return (
    <ContainerSection title={t("home.last-exercises")} onPressAction={() => {}}>
      <View className="w-full flex gap-y-4">
        {exercisesMock.map(excercise => (
          <ContainerCard
            key={excercise.id}
            Icon={SquareActivityIcon}
            title={excercise.name}
            subtitle={excercise.date.toLocaleDateString()}
            description={
              <View className="w-[80%] flex flex-row justify-between">
                <TextStyled className="text-sm color-typography-400">{`${excercise.durationInMin} min`}</TextStyled>

                <TextStyled className="text-sm color-typography-400">
                  {`${t("home.intensity")}: ${excercise.intensity}`}
                </TextStyled>
              </View>
            }
            onPress={() => {}}
          />
        ))}
      </View>
    </ContainerSection>
  );
}
