import { useEffect } from "react";
import { signIn } from "../api/auth-api";

export default function useSignIn({ fetch }: { fetch: boolean }) {
  useEffect(() => {
    if (fetch) {
      signIn("AA", "AA");
    }
  }, []);
}
