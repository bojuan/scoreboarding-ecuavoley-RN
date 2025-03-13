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
    backgroundColor: ColorsApp.PRIMARY,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 32,
    paddingRight: 12,
    paddingVertical: 8,
    transform: [{ translateX: -25 }],
    justifyContent: "center"
  },
  text: {
    color: ColorsApp.WHITE,
    fontSize: 16,
    textAlignVertical: "center"
  },
});
