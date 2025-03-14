import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MarkerTeam from "./components/marker-team/marker-team";
import { useState } from "react";
import MarkerButton from "./components/marker-button/marker-button";
import { ColorsApp } from "./shared/constants/colors";

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
    <SafeAreaView style={{ backgroundColor: "red", flex: 1 }}>
      <View style={styles.container}>
        <MarkerTeam
          numberMarker={numberLeftMarker}
          changeNumberTeam={(marker) => {
            setLeftMarker(marker);
          }}
          markerLimit={markerLimit}
          isActive={teamActive === "left"}
        />
        <MarkerTeam
          numberMarker={numberRightMarker}
          changeNumberTeam={(marker) => {
            setRightMarker(marker);
          }}
          markerLimit={markerLimit}
          position="right"
          isActive={teamActive === "right"}
        />
        
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "flex-end",
          }}
        >
          <MarkerButton
            typeButton="change"
            sizeButton={54}
            sizeIcon={20}
          />
          <MarkerButton
            typeButton="change"
            backgroundColorButton={ColorsApp.PRIMARY}
            colorIcon={ColorsApp.WHITE}
            sizeButton={80}
            sizeIcon={36}
            onPressButton={onChangeTeam}
          />
          <MarkerButton
            typeButton="change"
            sizeButton={54}
            sizeIcon={20}
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
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 12
  },
});
