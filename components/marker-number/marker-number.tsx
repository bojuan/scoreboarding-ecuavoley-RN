import { FC } from "react";
import { Pressable, Text } from "react-native";
import { stylesMarkerNumber } from "./marker-number.styles";
import { ColorsApp } from "../../shared/constants/colors";

interface MarkerNumberProps {
  numberMarker?: number;
  color?: ColorsApp;
}

const MarkerNumber: FC<MarkerNumberProps> = ({
  numberMarker = 0,
  color = ColorsApp.PRIMARY,
}) => {
  return (
    <Pressable style={stylesMarkerNumber.container}>
      <Text
        style={[
          stylesMarkerNumber.text,
          {
            color,
          },
        ]}
      >
        {numberMarker}
      </Text>
    </Pressable>
  );
};

export default MarkerNumber;
