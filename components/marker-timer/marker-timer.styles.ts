import { StyleSheet } from "react-native";
import { ColorsApp } from "../../shared/constants/colors";

export const markerTimerStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: ColorsApp.TERTIARY,
  },
  containerTime: {
    //
   
    paddingVertical: 4,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
    paddingHorizontal: 16
  },
  containerLabel: {
    backgroundColor: ColorsApp.TERTIARY,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 8
  },
  textTime: {
    fontSize: 32,
    fontWeight: 500,
    color: ColorsApp.WHITE,
  },
  textLabel: {
    color: ColorsApp.WHITE,
  },
});
