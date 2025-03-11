import { StyleSheet } from "react-native";
import { ColorsApp } from "../../shared/constants/colors";

export const stylesMarkerButton = StyleSheet.create({
  container: {
    backgroundColor: ColorsApp.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: ColorsApp.PRIMARY,
  },
});
