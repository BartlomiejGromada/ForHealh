import { useAppTheme } from "@/providers/ThemeProvider";
import { BedIcon, SunIcon } from "lucide-react-native";
import React from "react";
import { Pressable, View } from "react-native";

export default function ThemeSelector() {
  const { setTheme } = useAppTheme();

  return (
    <View>
      <Pressable onPress={() => setTheme("dark")}>
        <BedIcon stroke={"black"} />
      </Pressable>

      <Pressable onPress={() => setTheme("light")}>
        <SunIcon stroke={"black"} />
      </Pressable>
    </View>
  );
}
