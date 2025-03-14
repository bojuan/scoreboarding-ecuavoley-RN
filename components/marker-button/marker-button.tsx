import { FC } from "react";
import { Pressable, PressableStateCallbackType } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { stylesMarkerButton } from "./marker-button.styles";
import { ColorsApp } from "../../shared/constants/colors";

interface MarkerButtonProps {
  onPressButton?: () => void;
  typeButton?: "up" | "down" | "plus" | "change";
  sizeButton?: number;
  sizeIcon?: number;
  backgroundColorButton?: ColorsApp;
  colorIcon?: ColorsApp;
  disabled?: boolean;
  borderWidth?: number;
}

const MarkerButton: FC<MarkerButtonProps> = ({
  onPressButton,
  typeButton = "up",
  backgroundColorButton = ColorsApp.WHITE,
  colorIcon = ColorsApp.PRIMARY,
  sizeButton = 64,
  sizeIcon = 32,
  borderWidth = 4,
  disabled,
}) => {
  const styleContainer = ({ pressed }: PressableStateCallbackType) => [
    stylesMarkerButton.container,
    {
      backgroundColor: pressed ? ColorsApp.BACKGROUND : backgroundColorButton,
      width: sizeButton,
      height: sizeButton,
      borderWidth
    },
  ];

  const getNameIcon = () => {
    if (typeButton === "up") return "caretup";
    if (typeButton === "down") return "caretdown";
    if (typeButton === "change") return "retweet";

    return "plus";
  };

  return (
    <Pressable
      style={styleContainer}
      onPress={onPressButton}
      disabled={disabled}
    >
      {<AntDesign name={getNameIcon()} size={sizeIcon} color={colorIcon} />}
    </Pressable>
  );
};

export default MarkerButton;
