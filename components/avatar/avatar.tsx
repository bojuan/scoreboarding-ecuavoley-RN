import { FC } from "react";
import { Text, View } from "react-native";
import { getInitialCharacters } from "../../shared/functions/get-initial-characters/get-initial-characters";
import { avatarStyles } from "./avatar.styles";

interface AvatarProps {
  name: string;
  type?: "default" | "no-selected";
}

const Avatar: FC<AvatarProps> = ({ name, type }) => {
  const initialsCharacters = getInitialCharacters(name);

  return (
    <View
      style={[
        avatarStyles.container,
        type === "no-selected" ? avatarStyles.containerNoSelected : {},
      ]}
    >
      <Text
        style={[
          avatarStyles.text,
          type === "no-selected" ? avatarStyles.textNoSelected : {},
        ]}
      >
        {initialsCharacters}
      </Text>
    </View>
  );
};

export default Avatar;
