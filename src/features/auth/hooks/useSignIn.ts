import { ResponseStatus, User } from "@/types/Firebase";
import { saveInSecureStore } from "@/utils/secure-store";
import { useColorScheme } from "nativewind";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Toast from "react-native-toast-message";
import { signInRequest } from "../api/auth-api";

export default function useSignIn() {
  const { t } = useTranslation();
  const { colorScheme } = useColorScheme();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [user, setUser] = useState<User | undefined>();

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await signInRequest(email, password);

      if (response.status === ResponseStatus.SUCCESS) {
        saveInSecureStore("user", response.user);
        setUser(response.user);
      } else {
        setError(response.error.code);
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

      setError("something-went-wrong");
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

  return { user, signIn, isLoading, error };
}
