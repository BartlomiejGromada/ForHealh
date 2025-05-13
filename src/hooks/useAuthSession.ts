import { USER_KEY } from "@/constants/SecureStoreKeys";
import { useAppStore } from "@/store";
import { User } from "@/types/Firebase";
import { getFromSecureStore } from "@/utils/secure-store";
import { useEffect, useState } from "react";

export function useAuthSession() {
  const login = useAppStore(state => state.login);

  const [user, setUser] = useState<User | null>();

  getFromSecureStore<User>(USER_KEY).then(user => {
    setUser(user);
  });

  useEffect(() => {
    if (user) {
      login(user);
    }
  }, [user, login]);
}
