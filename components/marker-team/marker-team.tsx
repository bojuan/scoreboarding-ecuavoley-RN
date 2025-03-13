import { View } from "react-native";
import { FC } from "react";

import MarkerButton from "../marker-button/marker-button";
import MarkerNumber from "../marker-number/marker-number";
import { stylesMarkerTeam } from "./marker-team.styles";
import HeaderMarkerTeam from "../header-marker-team/header-marker-team";

interface MarkerTeamProps {
  changeNumberTeam: (newNumberMarker: number) => void;
  numberMarker: number;
  markerLimit: number;
}

const MarkerTeam: FC<MarkerTeamProps> = ({
  numberMarker,
  changeNumberTeam,
  markerLimit,
}) => {
  const changeNumber = (typeButton: "up" | "down") => {
    const currentNumberMarket = numberMarker + (typeButton === "up" ? 1 : -1);
    return () => {
      if (currentNumberMarket < 0 || currentNumberMarket > markerLimit) {
        alert("No se puede revasar los limites.");
        return;
      }
      changeNumberTeam(currentNumberMarket);
    };
  };

  return (
    <View style={stylesMarkerTeam.container}>
      <View style={stylesMarkerTeam.containerHeader}>
        <HeaderMarkerTeam nameTeam="Los pepitos" />
      </View>
      <View style={stylesMarkerTeam.containerMarker}>
        <MarkerNumber numberMarker={numberMarker} />
        <View style={stylesMarkerTeam.containerMarkerButton}>
          <MarkerButton typeButton="plus" onPressButton={changeNumber("up")} />
        </View>
      </View>
    </View>
  );
};

export default MarkerTeam;
