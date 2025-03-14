import { StyleSheet } from "react-native";
import { ColorsApp } from "../../shared/constants/colors";

export const headerMarkerTeamStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  avatar: {
    zIndex: 1,
  },
  containerName: {
    maxWidth: 200,
    backgroundColor: ColorsApp.WHITE,
    borderWidth: 4,
    borderColor: ColorsApp.PRIMARY,
    justifyContent: "center"
  },
  containerNameLeft: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 32,
    paddingRight: 12,
    paddingVertical: 8,
    transform: [{ translateX: -25 }],
  },
  containerNameRight: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 12,
    paddingRight: 32,
    paddingVertical: 8,
    transform: [{ translateX: 25 }],
  },
  containerSecondary: {
    borderColor: ColorsApp.GRAY_TWO,
    backgroundColor: ColorsApp.WHITE
  },
  text: {
    color: ColorsApp.PRIMARY,
    fontSize: 16,
    fontWeight: 400,
    textAlignVertical: "center"
  },
  textSecondary: {
    color: ColorsApp.GRAY_FIVE,
  },
});
