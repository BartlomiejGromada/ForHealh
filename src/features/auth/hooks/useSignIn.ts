import { User } from "@/types/Firebase";
import { save_in_store } from "@/utils/secure-store";
import { useState } from "react";
import { signInRequest } from "../api/auth-api";

export default function useSignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [user, setUser] = useState<User | undefined>();

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await signInRequest(email, password);

      if (response.status === "SUCCESS") {
        save_in_store("user", response.user);
        setUser(response.user);
      } else {
        setError(response.error.message);
      }
    } catch (e) {
      setError("something-went-wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return { user, signIn, isLoading, error };
}
