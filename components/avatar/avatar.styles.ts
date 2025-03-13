import { StyleSheet } from "react-native";
import { ColorsApp } from "../../shared/constants/colors";

export const avatarStyles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderWidth: 4,
    borderColor: ColorsApp.PRIMARY,
    borderRadius: 25
  },
  text: {
    width: 42,
    height: 42,
    borderRadius: 25,
    backgroundColor: ColorsApp.WHITE,
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center"
  },
});
