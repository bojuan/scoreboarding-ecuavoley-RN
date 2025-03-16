import { StyleSheet } from "react-native";
import { ColorsApp } from "../../shared/constants/colors";

export const scoreboardHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: ColorsApp.BACKGROUND,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginHorizontal: 8
  },
  containerInfo: {
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 80
  },
  labelInfo: {
    color: ColorsApp.TEXT,
    fontSize: 12,
    textAlign: "center"
  },
  textInfo: {
    color: ColorsApp.TEXT,
    textAlign: "center",
    fontSize: 24,
    fontWeight: 500
  }
});
