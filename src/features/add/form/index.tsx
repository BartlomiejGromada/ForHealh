import React from "react";
import { Text, View } from "react-native";
import { FORM_TYPE } from "../types/formType";
import ButtonStyled from "@/components/ui/ButtonStyled";
import { useTranslation } from "react-i18next";
import TextStyled from "@/components/ui/TextStyled";

//TODO: Implement forms and logic
export default function Form() {
  return (
    <View>
      <FormWrapper formType={FORM_TYPE.VISIT}></FormWrapper>
    </View>
  );
}

function FormWrapper({ formType }: { formType: FORM_TYPE }) {
  const { t } = useTranslation();

  const text =
    formType === FORM_TYPE.VISIT
      ? t("add.add-new-visit")
      : t("add.add-new-exercise");

  return (
    <View className="bg-card-light dark:bg-card-dark rounded-md p-4 gap-4">
      <TextStyled type="bold" className="dark:text-typography-white">
        {text}
      </TextStyled>
      <View className="flex items-center justify-center bg-gray-50 dark:bg-black dark:opacity-50 h-56">
        <TextStyled className="text-typography-500 dark:text-typography-white">
          {"TODO: FORM"}
        </TextStyled>
      </View>
      <ButtonStyled text={t("common.save")} onPress={() => {}} />
    </View>
  );
}
