import { StyleSheet } from "react-native";
import { ColorsApp } from "../../shared/constants/colors";

export const scoreboardHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: ColorsApp.SECONDARY,
    borderRadius: 15
  },
});
