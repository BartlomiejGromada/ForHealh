import { useEffect } from "react";
import { BackHandler } from "react-native";

export function useDisableAndroidBack() {
  useEffect(() => {
    const onBackPress = () => true; // true = blokuj cofanie
    const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress);

    return () => subscription.remove();
  }, []);
}
