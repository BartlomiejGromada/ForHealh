import ScreenAuthWrapper from "@/components/ScreenAuthWrapper";
import ButtonStyled from "@/components/ui/ButtonStyled";
import TextInputStyled from "@/components/ui/TextInputStyled";
import TextPressable from "@/components/ui/TextPressable";
import TextStyled from "@/components/ui/TextStyled";
import PasswordInput from "@/features/auth/components/PasswordInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { MailIcon } from "lucide-react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";
import { z } from "zod";

type SignInFormType = {
  email: string;
  password: string;
};

export default function SignInForm() {
  const { t } = useTranslation();

  const { navigate } = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<SignInFormType>({
    resolver: zodResolver(schema),
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onHandleSubmit = (data: SignInFormType) => {
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
              {t("auth.login")}
            </TextStyled>
            <TextStyled className="text-sm color-typography-400">
              {`${t("auth.welcome-back")}! ${t("auth.log-in-to-your-account")}`}
            </TextStyled>
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
        </View>

        <TextPressable
          text={t("auth.forgot-password")}
          classNameText={"text-right text-primary-500 font-light text-sm pt-6"}
          onPress={() => {
            // TODO
          }}
        />

        <ButtonStyled
          text={t("auth.log-in")}
          disabled={!isValid && isDirty}
          onPress={handleSubmit(onHandleSubmit)}
          className="pt-4"
        />

        <View className="flex flex-row justify-center gap-2 pt-6">
          <TextStyled className=" text-typography-400">
            {t("auth.dont-have-an-account-yet")}
          </TextStyled>
          <TextPressable
            text={t("auth.sign-up")}
            type={"bold"}
            onPress={() => navigate("/(app)/sign-up")}
          />
        </View>
      </ScrollView>
    </ScreenAuthWrapper>
  );
}

const schema = z.object({
  email: z.string().min(1, { message: "auth.errors.email-is-required" }).email({
    message: "auth.errors.email-is-invalid",
  }),
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
});
