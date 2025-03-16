import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MarkerTeam from "./components/marker-team/marker-team";
import { useState } from "react";
import MarkerButton from "./components/marker-button/marker-button";
import { ColorsApp } from "./shared/constants/colors";
import MarkerTimer from "./components/marker-timer/marker-timer";
import ScoreboardHeader from "./components/scoreboard-header/scoreboard-header";

type TeamType = "left" | "right";

export default function App() {
  const [numberLeftMarker, setLeftMarker] = useState<number>(0);
  const [numberRightMarker, setRightMarker] = useState<number>(0);
  const [markerLimit, setMarkerLimit] = useState<number>(12);
  const [teamActive, setTeamActive] = useState<TeamType>("left");

  const onChangeTeam = () => {
    setTeamActive(teamActive === "left" ? "right" : "left");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScoreboardHeader />
        <View style={{
          height: 80,
          backgroundColor: ColorsApp.BACKGROUND,
          marginVertical: 20
        }} />
        <View style={styles.containerScoreboards}>
          <MarkerTeam
            nameTeam="Equipo Uno"
            periodsWon={[]}
            numberMarker={numberLeftMarker}
            changeNumberTeam={(marker) => {
              setLeftMarker(marker);
            }}
            markerLimit={markerLimit}
            isActive={teamActive === "left"}
          />
          <MarkerTeam
            nameTeam="Equipo Dos"
            periodsWon={[]}
            numberMarker={numberRightMarker}
            changeNumberTeam={(marker) => {
              setRightMarker(marker);
            }}
            markerLimit={markerLimit}
            position="right"
            isActive={teamActive === "right"}
          />
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <MarkerButton
            typeButton="change"
            backgroundColorButton={ColorsApp.PRIMARY}
            colorIcon={ColorsApp.WHITE}
            sizeButton={80}
            sizeIcon={36}
            onPressButton={onChangeTeam}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
    backgroundColor: ColorsApp.WHITE,
    justifyContent: "space-between",
  },
  containerScoreboards: {
    padding: 12,
    borderRadius: 15,
    backgroundColor: "rgb(243, 249, 255)",
    margin: 8,
  },
});
