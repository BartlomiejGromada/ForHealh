import { COLORS } from "@/constants/Colors";
import { CheckCircle2Icon, CircleAlertIcon } from "lucide-react-native";
import { View } from "react-native";
import { BaseToast, ErrorToast, ToastConfigParams } from "react-native-toast-message";

type StyledToastProps = ToastConfigParams<{ theme: "light" | "dark" }>;

export const toastConfig = {
  success: (props: StyledToastProps) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: props.props.theme === "dark" ? COLORS.card.dark : COLORS.card.light,
        borderLeftColor: COLORS.primary[500],
      }}
      renderLeadingIcon={() => (
        <View className="flex items-center justify-center p-2">
          <CheckCircle2Icon
            color={props.props.theme === "dark" ? COLORS.card.dark : COLORS.primary[500]}
            fill={props.props.theme === "dark" ? COLORS.primary[500] : COLORS.card.light}
          />
        </View>
      )}
      text2NumberOfLines={3}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "600",
        color: props.props.theme === "dark" ? COLORS.white : COLORS.black,
      }}
      text2Style={{
        fontSize: 12,
        fontWeight: "400",
        color: COLORS.typography[500],
      }}
    />
  ),
  error: (props: StyledToastProps) => (
    <ErrorToast
      {...props}
      style={{
        backgroundColor: props.props.theme === "dark" ? COLORS.card.dark : COLORS.card.light,
        borderLeftColor: props.props.theme === "dark" ? COLORS.error.dark : COLORS.error.light,
      }}
      renderLeadingIcon={() => (
        <View className="flex items-center justify-center p-2">
          <CircleAlertIcon
            color={props.props.theme === "dark" ? COLORS.card.dark : COLORS.error.light}
            fill={props.props.theme === "dark" ? COLORS.error.dark : COLORS.card.light}
          />
        </View>
      )}
      text2NumberOfLines={3}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "600",
        color: props.props.theme === "dark" ? COLORS.white : COLORS.black,
      }}
      text2Style={{
        fontSize: 12,
        fontWeight: "400",
        color: COLORS.typography[500],
      }}
    />
  ),
};
