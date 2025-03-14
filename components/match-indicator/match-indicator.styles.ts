import { StyleSheet } from "react-native";
import { ColorsApp } from "../../shared/constants/colors";

export const matchIndicatorStyles = StyleSheet.create({
  container: {
    gap: 8,
    marginVertical: 24,
    paddingVertical: 4,
    paddingHorizontal: 8,
    justifyContent: "center",
    borderRadius: 12,
  },
  indicator: {
    width: 32,
    height: 32,
    backgroundColor: ColorsApp.WHITE,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: ColorsApp.GRAY_TWO
  },
  indicatorSelected: {
    backgroundColor: ColorsApp.TERTIARY,
    borderColor: ColorsApp.BACKGROUND
  },
});
