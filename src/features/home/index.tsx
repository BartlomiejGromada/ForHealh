import ScreenWrapper from "@/components/ScreenWrapper";
import { UserIcon } from "lucide-react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import Dashboard from "./dashboard";
import { useAppStore } from "@/store";
import { removeFromSecureStore } from "@/utils/secure-store";

export default function Home() {
  const { t } = useTranslation();
  const user = useAppStore(state => state.user)!;

  return (
    <ScreenWrapper
      title={`${t("home.welcome")}, ${user.name}!`}
      Icon={{
        name: UserIcon,
        onPress: () => {
          // TODO: Implement
          // MOCK
          removeFromSecureStore("user");
        },
      }}>
      <Dashboard />
    </ScreenWrapper>
  );
}
