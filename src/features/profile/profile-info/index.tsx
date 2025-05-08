import React from "react";
import { View } from "react-native";
import Table from "./Table";
import Badge from "./Badge";

export default function ProfileInfo() {
  return (
    <View className="gap-4">
      <Badge />
      <Table />
    </View>
  );
}
