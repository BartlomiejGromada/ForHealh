import { SessionProvider } from "@/providers/SessionProvider";
import "@/utils/language/i18nConfig"; // This line imports the i18n configuration
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import "react-native-reanimated";
import Toast from "react-native-toast-message";
import "../global.css";
import { toastConfig } from "@/utils/toast-message/toastConfig";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { setColorScheme } = useColorScheme();

  const [loaded] = useFonts({
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
    "Lato-Thin": require("../assets/fonts/Lato-Thin.ttf"),
    "Lato-Light": require("../assets/fonts/Lato-Light.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      setColorScheme("light"); // Default light theme
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SessionProvider>
      <Slot />
      <Toast config={toastConfig} />
    </SessionProvider>
  );
}
