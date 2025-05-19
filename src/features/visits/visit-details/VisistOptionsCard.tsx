import TextStyled from "@/components/ui/TextStyled";
import { EditIcon, Trash2Icon, XIcon } from "lucide-react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, Modal, View } from "react-native";
import ActionButton from "../components/ActionButton";
import ButtonStyled from "@/components/ui/ButtonStyled";

type VisistOptionsCardProps = {
  visitId: string;
};

export default function VisistOptionsCard({ visitId }: VisistOptionsCardProps) {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);

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
          setIsModalVisible(true);
        }}
      />
      <ActionButton text={t("visits.cancel-visit")} Icon={XIcon} action="cancel" />
      <ActionButton text={t("visits.remove-visit")} Icon={Trash2Icon} action="remove" />

      {isModalVisible && (
        <ConfirmationModal
          isVisible={isModalVisible}
          onClose={() => {
            setIsModalVisible(false);
          }}
        />
      )}
    </View>
  );
}

const ConfirmationModal = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
  const { t } = useTranslation();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        onClose();
      }}>
      <View className="flex-1 items-center justify-center">
        <TextStyled>{t("common.are-you-sure")}</TextStyled>
        <View className="flex gap-4">
          <ButtonStyled text={t("common.yes")} />
          <ButtonStyled type="outlined" text={t("common.no")} onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};
