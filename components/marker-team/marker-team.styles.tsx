import { StyleSheet } from "react-native";
import { ColorsApp } from "../../shared/constants/colors";

export const stylesMarkerTeam = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8
  },
  containerMarkerTeam: {
    justifyContent: "center",
    flex: 1
  },
  containerHeader: {
    zIndex: 1,
  },
  containerMarkerButton: {
   
  },
  containerMarker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    borderWidth: 4,
    borderRadius: 25,
    borderColor: ColorsApp.WHITE,
    transform: [{ translateY: -25 }],
    backgroundColor: ColorsApp.WHITE,
    paddingTop: 24
  },
  markerNumber: {
    flex: 1
  },
});
