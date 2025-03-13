import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MarkerTeam from "./components/marker-team/marker-team";
import { useState } from "react";

export default function App() {
  const [numberFirstMarker, setFirstMarker] = useState<number>(0);
  const [numberSecondMarker, setSecondMarker] = useState<number>(0);
  const [markerLimit, setMarkerLimit] = useState<number>(12)
  return (
    <View style={styles.container}>
      <MarkerTeam
        numberMarker={numberFirstMarker}
        changeNumberTeam={(marker) => {
          setFirstMarker(marker);
        }}
        markerLimit={markerLimit}
      />
      <MarkerTeam
        numberMarker={numberFirstMarker}
        changeNumberTeam={(marker) => {
          setFirstMarker(marker);
        }}
        markerLimit={markerLimit}
        position="right"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 12
  },
});
