import { BedIcon, SunIcon } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import React from "react";
import { Pressable, View } from "react-native";

export default function ThemeSelector() {
  const { setColorScheme } = useColorScheme();

  return (
    <View>
      <Pressable onPress={() => setColorScheme("dark")}>
        <BedIcon stroke={"black"} />
      </Pressable>

      <Pressable onPress={() => setColorScheme("light")}>
        <SunIcon stroke={"black"} />
      </Pressable>
    </View>
  );
}
