import { COLORS } from "@/constants/Colors";
import { useSession } from "@/providers/SessionProvider";
import { Redirect, Tabs } from "expo-router";
import {
  CalendarIcon,
  HouseIcon,
  UserIcon,
  PlusCircleIcon,
} from "lucide-react-native";
import { useColorScheme } from "nativewind";
import React from "react";
import { useTranslation } from "react-i18next";

export default function _layout() {
  const { session } = useSession();

  if (!session) {
    return <Redirect href={"/(app)/auth-welcome"} />;
  }

  return <RootTabs />;
}

const RootTabs = () => {
  const { t } = useTranslation();

  const { colorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary[500],
        animation: "shift",
        headerShown: false,
        tabBarStyle: {
          backgroundColor:
            colorScheme === "dark" ? COLORS.card.dark : COLORS.card.light,
        },
        tabBarLabelStyle: {
          fontFamily: "Lato-Regular",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t("common.tab.home"),
          tabBarIcon: ({ color }) => <HouseIcon color={color} size={32} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: t("common.tab.calendar"),
          tabBarIcon: ({ color }) => <CalendarIcon color={color} size={32} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: t("common.tab.add"),
          tabBarIcon: ({ color }) => <PlusCircleIcon color={color} size={32} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t("common.tab.profile"),
          tabBarIcon: ({ color }) => <UserIcon color={color} size={32} />,
        }}
      />
    </Tabs>
  );
};
