import ConfirmationModal from "@/components/ui/ConfirmationModal";
import TextStyled from "@/components/ui/TextStyled";
import { EditIcon, Trash2Icon, XIcon } from "lucide-react-native";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import ActionButton from "../components/ActionButton";

type VisistOptionsCardProps = {
  visitId: string;
};

export default function VisistOptionsCard({ visitId }: VisistOptionsCardProps) {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onCancelVisitHandle = useCallback(() => {
    // TODO
    setIsModalVisible(true);
  }, []);

  const onRemoveVisitHandle = useCallback(() => {
    // TODO
    setIsModalVisible(true);
  }, []);

  return (
    <View className="flex justify-center bg-card-light dark:bg-card-dark p-4 rounded-lg gap-4">
      <TextStyled
        type="bold"
        className="text-xl dark:color-typography-white">{`${t("visits.additional-options")}:`}</TextStyled>

      <ActionButton
        text={t("common.edit")}
        Icon={EditIcon}
        action="edit"
        onPress={() => {
          // TODO
        }}
      />
      <ActionButton
        text={t("visits.cancel-visit")}
        Icon={XIcon}
        action="cancel"
        onPress={onCancelVisitHandle}
      />
      <ActionButton
        text={t("visits.remove-visit")}
        Icon={Trash2Icon}
        action="remove"
        onPress={onRemoveVisitHandle}
      />

      {isModalVisible && (
        <ConfirmationModal
          visible={isModalVisible}
          onConfirm={() => {}}
          onClose={() => {
            setIsModalVisible(false);
          }}
        />
      )}
    </View>
  );
}
