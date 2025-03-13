import { FC } from "react";
import { Pressable, PressableStateCallbackType } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { stylesMarkerButton } from "./marker-button.styles";
import { ColorsApp } from "../../shared/constants/colors";

interface MarkerButtonProps {
  onPressButton?: () => void;
  typeButton?: "up" | "down" | "plus";
}

const MarkerButton: FC<MarkerButtonProps> = ({
  onPressButton,
  typeButton = "up",
}) => {
  const styleContainer = ({ pressed }: PressableStateCallbackType) => [
    stylesMarkerButton.container,
    {
      backgroundColor: pressed ? ColorsApp.BACKGROUND : ColorsApp.WHITE,
    },
  ];

  const getNameIcon = () => {
    if (typeButton === "up") return "caretup";
    if (typeButton === "down") return "caretdown";

    return "plus";
  };

  return (
    <Pressable style={styleContainer} onPress={onPressButton}>
      {<AntDesign name={getNameIcon()} size={32} color={ColorsApp.PRIMARY} />}
    </Pressable>
  );
};

export default MarkerButton;
