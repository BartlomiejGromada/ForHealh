import TextStyled from "@/components/ui/TextStyled";
import { COLORS } from "@/constants/Colors";
import { LucideIcon } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

export type ContainerCardProps = {
  Icon: LucideIcon;
  title: string;
  subtitle: string;
  description: React.ReactNode;
};

export function ContainerCard({ Icon, title, subtitle, description }: ContainerCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View className="w-full flex flex-row items-center rounded-lg gap-x-4 bg-card-light p-4 dark:bg-card-dark">
        <View className="flex items-center justify-center bg-primary-200 rounded-full p-4">
          <Icon color={COLORS.primary[500]} />
        </View>
        <View className="w-full">
          <TextStyled type="bold" className="text-md dark:text-typography-white">
            {title}
          </TextStyled>
          <TextStyled className="text-sm color-typography-400">{subtitle}</TextStyled>
          {description}
        </View>
      </View>
    </TouchableOpacity>
  );
}
