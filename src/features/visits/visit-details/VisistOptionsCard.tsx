import ConfirmationModal from "@/components/ui/ConfirmationModal";
import TextStyled from "@/components/ui/TextStyled";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  EditIcon,
  TrashIcon,
  XIcon,
} from "lucide-react-native";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Menu } from "react-native-paper";
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
    <View className="flex bg-card-light dark:bg-card-dark p-4 rounded-lg gap-4">
      <TextStyled
        type="bold"
        className="text-xl dark:color-typography-white">{`${t("visits.additional-options")}:`}</TextStyled>

      <ActionButton
        text={t("common.edit")}
        Icon={EditIcon}
        action="basic"
        onPress={() => {
          // TODO
        }}
      />

      <ActionMenu />

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

const ActionMenu = () => {
  const { t } = useTranslation();

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <Menu
      visible={isMenuVisible}
      style={{ width: 340 }}
      anchor={
        <ActionButton
          text={t("common.actions")}
          action="basic"
          Icon={isMenuVisible ? ArrowUpIcon : ArrowDownIcon}
          onPress={() => setIsMenuVisible(true)}
        />
      }
      anchorPosition="bottom"
      mode="flat"
      onDismiss={() => {
        setIsMenuVisible(false);
      }}>
      <View className="flex gap-2">
        <ActionButton
          text={t("visits.mark-visit-as-finished")}
          Icon={CheckIcon}
          action="finish"
          buttonClassName="bg-primary-100"
          onPress={() => setIsMenuVisible(true)}
        />

        <ActionButton
          text={t("visits.cancel-visit")}
          Icon={XIcon}
          action="cancel"
          buttonClassName="bg-primary-100"
          onPress={() => setIsMenuVisible(true)}
        />

        <ActionButton
          text={t("visits.remove-visit")}
          Icon={TrashIcon}
          action="remove"
          buttonClassName="bg-primary-100"
          onPress={() => setIsMenuVisible(true)}
        />
      </View>
    </Menu>
  );
};
