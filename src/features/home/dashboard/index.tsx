import React from "react";
import { View } from "react-native";
import LastExercises from "./LastExercises";
import Summary from "./Summary";
import UpcomingVisits from "./UpcomingVisits";

export default function Dashboard() {
  return (
    <View className="gap-y-8">
      <Summary />
      <UpcomingVisits />
      <LastExercises />
    </View>
  );
}
