import { FC } from "react";
import { Text, View } from "react-native";
import { headerMarkerTeamStyles } from "./header-marker-team.styles";
import Avatar from "../avatar/avatar";

interface HeaderMarkerTeamProps {
  nameTeam: string;
}

const HeaderMarkerTeam: FC<HeaderMarkerTeamProps> = ({ nameTeam }) => {
  return (
    <View style={headerMarkerTeamStyles.container}>
      <View style={headerMarkerTeamStyles.avatar}>
        <Avatar name={nameTeam} />
      </View>
      <View style={headerMarkerTeamStyles.containerName}>
        <Text style={headerMarkerTeamStyles.text}>{nameTeam}</Text>
      </View>
    </View>
  );
};

export default HeaderMarkerTeam;
