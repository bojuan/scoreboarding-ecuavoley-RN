import { FC } from "react";
import { Pressable, PressableStateCallbackType } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { stylesMarkerButton } from "./marker-button.styles";
import { ColorsApp } from "../../shared/constants/colors";

interface MarkerButton {
  onPressButton?: () => void;
  typeButton?: "up" | "down";
}

const MarkerButton: FC<MarkerButton> = ({
  onPressButton,
  typeButton = "up",
}) => {
  const styleContainer = ({ pressed }: PressableStateCallbackType) => [
    stylesMarkerButton.container,
    {
      backgroundColor: pressed ? ColorsApp.BACKGROUND : ColorsApp.WHITE,
    },
  ];

  return (
    <Pressable style={styleContainer} onPress={onPressButton}>
      {
        <AntDesign
          name={typeButton === "up" ? "caretup" : "caretdown"}
          size={24}
          color={ColorsApp.PRIMARY}
        />
      }
    </Pressable>
  );
};

export default MarkerButton;
