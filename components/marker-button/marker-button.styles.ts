import { StyleSheet } from "react-native";
import { ColorsApp } from "../../shared/constants/colors";

export const stylesMarkerButton = StyleSheet.create({
  container: {
    backgroundColor: ColorsApp.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: ColorsApp.PRIMARY,
  },
});
