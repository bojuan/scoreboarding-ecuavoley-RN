import { StyleSheet } from "react-native";
import { ColorsApp } from "../../shared/constants/colors";

export const stylesMarkerTeam = StyleSheet.create({
  container: {
    justifyContent: "center",

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
