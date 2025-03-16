import { View } from "react-native";
import { FC } from "react";

import MarkerButton from "../marker-button/marker-button";
import MarkerNumber from "../marker-number/marker-number";
import { stylesMarkerTeam } from "./marker-team.styles";
import HeaderMarkerTeam from "../header-marker-team/header-marker-team";
import MatchIndicator from "../match-indicator/match-indicator";
import { ColorsApp } from "../../shared/constants/colors";

interface MarkerTeamProps {
  nameTeam: string;
  changeNumberTeam: (newNumberMarker: number) => void;
  numberMarker: number;
  markerLimit: number;
  periodsWon: PeriodsType[];
  position?: "left" | "right";
  isActive?: boolean;
}

const MarkerTeam: FC<MarkerTeamProps> = ({
  nameTeam,
  numberMarker,
  changeNumberTeam,
  markerLimit,
  periodsWon,
  position = "left",
  isActive,
}) => {
  const changeNumber = () => {
    changeNumberTeam(numberMarker + 1);
  };

  const getContainerStyle = () => {
    let style = {}

    if(isActive) {
      style ={
        borderWidth: 4,
        borderColor: ColorsApp.PRIMARY
      }
    }

    return style
  }

  return (
    <View style={stylesMarkerTeam.container}>
      <MatchIndicator periodsWon={periodsWon} />
      <View style={stylesMarkerTeam.containerMarkerTeam}>
        <View
          style={[
            stylesMarkerTeam.containerHeader,
            {
              alignItems: position === "right" ? "flex-end" : "flex-start",
            },
          ]}
        >
          <HeaderMarkerTeam
            nameTeam={nameTeam}
            position={position}
            type={isActive ? "primary" : "secondary"}
          />
        </View>
        <View
          style={[
            stylesMarkerTeam.containerMarker,
            getContainerStyle()
            /* {
              backgroundColor: isActive
                ? ColorsApp.BACKGROUND
                : ColorsApp.WHITE,
            }, */
          ]}
        >
          <View style={stylesMarkerTeam.markerNumber}>
            <MarkerNumber
              numberMarker={numberMarker}
              color={isActive ? ColorsApp.PRIMARY : ColorsApp.GRAY_FIVE}
            />
          </View>
          <View style={stylesMarkerTeam.containerMarkerButton}>
            <MarkerButton
              typeButton="plus"
              onPressButton={changeNumber}
              disabled={!isActive}
              borderWidth={isActive ? 4 : 0}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MarkerTeam;
