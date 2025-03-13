import { View } from "react-native";
import { FC } from "react";

import MarkerButton from "../marker-button/marker-button";
import MarkerNumber from "../marker-number/marker-number";
import { stylesMarkerTeam } from "./marker-team.styles";
import HeaderMarkerTeam from "../header-marker-team/header-marker-team";
import MatchIndicator from "../match-indicator/match-indicator";

interface MarkerTeamProps {
  changeNumberTeam: (newNumberMarker: number) => void;
  numberMarker: number;
  markerLimit: number;
  position?: "left" | "right";
}

const MarkerTeam: FC<MarkerTeamProps> = ({
  numberMarker,
  changeNumberTeam,
  markerLimit,
  position = "left",
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
      <MatchIndicator periodsWon={["two"]} isThirdPeriod/>
      <View style={stylesMarkerTeam.containerMarkerTeam}>
        <View
          style={[
            stylesMarkerTeam.containerHeader,
            {
              alignItems: position === "right" ? "flex-end" : "flex-start",
            },
          ]}
        >
          <HeaderMarkerTeam nameTeam="Los pepitos" position={position} />
        </View>
        <View style={stylesMarkerTeam.containerMarker}>
          <MarkerNumber numberMarker={numberMarker} />
          <View style={stylesMarkerTeam.containerMarkerButton}>
            <MarkerButton
              typeButton="plus"
              onPressButton={changeNumber("up")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MarkerTeam;
