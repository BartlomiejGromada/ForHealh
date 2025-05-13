import { useAppStore } from "@/store";
import { Redirect, Slot } from "expo-router";

export default function AuthLayout() {
  const isLoggedIn = useAppStore(state => state.isLoggedIn);

  if (isLoggedIn) {
    return <Redirect href={"/(root)"} />;
  }

  return <Slot />;
}
