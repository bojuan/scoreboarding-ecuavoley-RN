import { FC } from "react";
import { Pressable, Text } from "react-native";
import { stylesMarkerNumber } from "./marker-number.styles";

interface MarkerNumberProps {
  numberMarker?: number;
}

const MarkerNumber: FC<MarkerNumberProps> = ({ numberMarker = 0 }) => {
  return (
    <Pressable style={stylesMarkerNumber.container}>
      <Text style={stylesMarkerNumber.text}>{numberMarker}</Text>
    </Pressable>
  );
};

export default MarkerNumber;
