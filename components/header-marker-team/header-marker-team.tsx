import { FC } from "react";
import { Text, View } from "react-native";
import { headerMarkerTeamStyles } from "./header-marker-team.styles";
import Avatar from "../avatar/avatar";

interface HeaderMarkerTeamProps {
  nameTeam: string;
  position?: "right" | "left";
  type?: "primary" | "secondary";
}

const HeaderMarkerTeam: FC<HeaderMarkerTeamProps> = ({
  nameTeam,
  position = "left",
  type = "primary",
}) => {
  return (
    <View style={headerMarkerTeamStyles.container}>
      {position === "left" && (
        <View style={headerMarkerTeamStyles.avatar}>
          <Avatar
            name={nameTeam}
            type={type === "secondary" ? "no-selected" : undefined}
          />
        </View>
      )}

      <View
        style={[
          headerMarkerTeamStyles.containerName,
          type === "secondary"
            ? headerMarkerTeamStyles.containerSecondary
            : undefined,
          position === "left"
            ? headerMarkerTeamStyles.containerNameLeft
            : headerMarkerTeamStyles.containerNameRight,
        ]}
      >
        <Text
          style={[
            headerMarkerTeamStyles.text,
            type === "secondary"
              ? headerMarkerTeamStyles.textSecondary
              : undefined,
          ]}
        >
          {nameTeam}
        </Text>
      </View>

      {position === "right" && (
        <View style={headerMarkerTeamStyles.avatar}>
          <Avatar
            name={nameTeam}
            type={type === "secondary" ? "no-selected" : undefined}
          />
        </View>
      )}
    </View>
  );
};

export default HeaderMarkerTeam;
