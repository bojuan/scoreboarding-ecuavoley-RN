import { StyleSheet } from "react-native";
import { ColorsApp } from "../../shared/constants/colors";

export const avatarStyles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderWidth: 4,
    borderColor: ColorsApp.PRIMARY,
    borderRadius: 25,
    backgroundColor: ColorsApp.PRIMARY
  },
  text: {
    width: 42,
    height: 42,
    borderRadius: 25,
    color:ColorsApp.WHITE,
    backgroundColor: ColorsApp.PRIMARY,
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
    textAlignVertical: "center"
  },
  containerNoSelected: {
    borderColor: ColorsApp.GRAY_TWO,
    backgroundColor: ColorsApp.GRAY_TWO
  },
  textNoSelected: {
    color:ColorsApp.GRAY_FOUR,
    backgroundColor: ColorsApp.GRAY_TWO,
  }

});
