import { FC } from "react";
import { Text, View } from "react-native";
import { getInitialCharacters } from "../../shared/functions/get-initial-characters/get-initial-characters";
import { avatarStyles } from "./avatar.styles";

interface AvatarProps {
  name: string;
}

const Avatar: FC<AvatarProps> = ({ name }) => {
  const initialsCharacters = getInitialCharacters(name);

  return (
    <View style={avatarStyles.container}>
      <Text style={avatarStyles.text}>{initialsCharacters}</Text>
    </View>
  );
};

export default Avatar;
