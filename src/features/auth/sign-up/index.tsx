import ScreenAuthWrapper from "@/components/ScreenAuthWrapper";
import ButtonStyled from "@/components/ui/ButtonStyled";
import TextInputStyled from "@/components/ui/TextInputStyled";
import TextPressable from "@/components/ui/TextPressable";
import TextStyled from "@/components/ui/TextStyled";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { MailIcon, UserIcon } from "lucide-react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";
import { z } from "zod";
import PasswordInput from "../components/PasswordInput";

type SignUpFormType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SingUpForm() {
  const { t } = useTranslation();

  const { navigate } = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(schema),
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onHandleSubmit = (data: SignUpFormType) => {
    //TODO: Send request to firebase auth
    console.log(data);
  };

  return (
    <ScreenAuthWrapper className="justify-start items-start">
      <ScrollView>
        <View className="gap-4">
          <View className="gap-2">
            <TextStyled
              type="bold"
              className="text-3xl dark:color-typography-white"
            >
              {t("auth.registration")}
            </TextStyled>
            <TextStyled className="text-sm color-typography-400">
              {`${t("auth.create-new-account-and-take-care-of-your-health")}`}
            </TextStyled>
          </View>

          <View className="gap-2 w-full">
            <TextStyled type="bold" className=" dark:color-typography-white">
              {t("auth.firstname-and-lastname")}
            </TextStyled>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInputStyled
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  errors={errors.name}
                  autoCapitalize="words"
                  placeholder={t("auth.firstname-and-lastname")}
                  Icon={UserIcon}
                />
              )}
            />
          </View>

          <View className="gap-2 w-full">
            <TextStyled type="bold" className=" dark:color-typography-white">
              {t("auth.email")}
            </TextStyled>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInputStyled
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  errors={errors.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholder={t("auth.email")}
                  Icon={MailIcon}
                />
              )}
            />
          </View>

          <View className="gap-2 w-full">
            <TextStyled type="bold" className="dark:color-typography-white">
              {t("auth.password")}
            </TextStyled>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <PasswordInput
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  errors={errors.password}
                  autoCapitalize="none"
                  placeholder={t("auth.password")}
                />
              )}
            />
          </View>

          <View className="gap-2 w-full">
            <TextStyled type="bold" className="dark:color-typography-white">
              {t("auth.confirm-password")}
            </TextStyled>
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, onBlur, value } }) => (
                <PasswordInput
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  errors={errors.confirmPassword}
                  autoCapitalize="none"
                  placeholder={t("auth.confirm-password")}
                />
              )}
            />
          </View>
        </View>

        <ButtonStyled
          text={t("auth.sign-up")}
          disabled={!isValid && isDirty}
          onPress={handleSubmit(onHandleSubmit)}
          className="pt-12"
        />

        <View className="flex flex-row justify-center gap-2 pt-6">
          <TextStyled className="text-typography-400">
            {t("auth.already-have-an-account")}
          </TextStyled>
          <TextPressable
            text={t("auth.log-in")}
            type="bold"
            onPress={() => navigate("/(app)/sign-in")}
          />
        </View>
      </ScrollView>
    </ScreenAuthWrapper>
  );
}

const schema = z
  .object({
    name: z.string().min(1, {
      message: "auth.errors.firstname-and-lastname-is-required",
    }),
    email: z
      .string()
      .min(1, { message: "auth.errors.email-is-required" })
      .email({ message: "auth.errors.email-is-invalid" }),
    password: z
      .string()
      .min(1, {
        message: "auth.errors.password-is-required",
      })
      .min(8, {
        message: "auth.errors.password-must-have-atleast-count-characters",
      })
      .regex(/\d/, {
        message: "auth.errors.password-must-contain-digit",
      }) // Przynajmniej jedna cyfra
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: "auth.errors.password-must-contain-special-character",
      }), // Przynajmniej jeden znak specjalny
    confirmPassword: z.string().min(1, {
      message: "auth.errors.confirm-password-is-required",
    }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "auth.errors.confirm-password-is-not-match-to-password",
        path: ["confirmPassword"],
      });
    }
  });
// .refine(
//   (values) => {
//     return values.password === values.confirmPassword;
//   },
//   {
//     message: "auth.errors.confirm-password-is-not-match-to-password",
//     path: ["confirmPassword"],
//   }
// );
