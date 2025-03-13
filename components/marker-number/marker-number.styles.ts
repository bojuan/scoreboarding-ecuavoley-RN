import { StyleSheet } from "react-native";
import { ColorsApp } from "../../shared/constants/colors";

export const stylesMarkerNumber = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: ColorsApp.PRIMARY,
    fontSize: 80,
    fontWeight: 500
  }
});