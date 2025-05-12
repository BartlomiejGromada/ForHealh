import { useAppStore } from "@/store";
import { ResponseStatus } from "@/types/Firebase";
import { saveInSecureStore } from "@/utils/secure-store";
import { useColorScheme } from "nativewind";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Toast from "react-native-toast-message";
import { signInRequest } from "../api/auth-api";

export default function useSignIn() {
  const { t } = useTranslation();
  const { colorScheme } = useColorScheme();

  const login = useAppStore(state => state.login);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const response = await signInRequest(email, password);

      if (response.status === ResponseStatus.SUCCESS) {
        saveInSecureStore("user", response.user);
        login(response.user);
      } else {
        Toast.show({
          type: "error",
          text1: t("common.error"),
          text2: `${t(`firebase-errors.${response.error.code}`, { ns: "auth" })}`,
          props: {
            theme: colorScheme,
          },
        });
      }
    } catch (e) {
      console.error(e);

      Toast.show({
        type: "error",
        text1: t("common.error"),
        text2: `${t(`errors.something-went-wrong`, { ns: "common" })}`,
        props: {
          theme: colorScheme,
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { signIn, isLoading };
}
