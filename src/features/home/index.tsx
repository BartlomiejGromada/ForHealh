import ScreenWrapper from "@/components/ScreenWrapper";
import { UserIcon } from "lucide-react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import Dashboard from "./dashboard";

export default function Home() {
  const { t } = useTranslation();

  // TODO: Użytkwniku change to userName
  return (
    <ScreenWrapper
      title={`${t("home.welcome")}, Użytkowniku!`}
      Icon={{
        name: UserIcon,
        onPress: () => {
          // TODO: Implement
        },
      }}
    >
      <Dashboard />
    </ScreenWrapper>
  );
}
