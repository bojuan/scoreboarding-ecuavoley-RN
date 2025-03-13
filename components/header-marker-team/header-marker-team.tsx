import { FC } from "react";
import { Text, View } from "react-native";
import { headerMarkerTeamStyles } from "./header-marker-team.styles";
import Avatar from "../avatar/avatar";

interface HeaderMarkerTeamProps {
  nameTeam: string;
  position?: "right" | "left";
}

const HeaderMarkerTeam: FC<HeaderMarkerTeamProps> = ({
  nameTeam,
  position = "left",
}) => {
  return (
    <View style={headerMarkerTeamStyles.container}>
      {position === "left" && (
        <View style={headerMarkerTeamStyles.avatar}>
          <Avatar name={nameTeam} />
        </View>
      )}

      <View
        style={[
          headerMarkerTeamStyles.containerName,
          position === "left"
            ? headerMarkerTeamStyles.containerNameLeft
            : headerMarkerTeamStyles.containerNameRight,
        ]}
      >
        <Text style={headerMarkerTeamStyles.text}>{nameTeam}</Text>
      </View>

      {position === "right" && (
        <View style={headerMarkerTeamStyles.avatar}>
          <Avatar name={nameTeam} />
        </View>
      )}
    </View>
  );
};

export default HeaderMarkerTeam;
