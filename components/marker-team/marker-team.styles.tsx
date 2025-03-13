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
    borderRadius: 25,
    transform: [{ translateY: -25 }],
    backgroundColor: ColorsApp.BACKGROUND,
    paddingTop: 24
  },
});
