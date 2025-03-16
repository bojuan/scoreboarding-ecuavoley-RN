import { Pressable, Text, View } from "react-native";
import MarkerTimer from "../marker-timer/marker-timer";
import { scoreboardHeaderStyles } from "./scoreboard-header.styles";

const ScoreboardHeader = () => {
  return (
    <View style={scoreboardHeaderStyles.container}>
      <View style={scoreboardHeaderStyles.containerInfo}>
        <Text style={scoreboardHeaderStyles.labelInfo}>Periodo</Text>
        <Pressable>
          <Text style={scoreboardHeaderStyles.textInfo}>Primer</Text>
        </Pressable>
      </View>
      <MarkerTimer />
      <View style={scoreboardHeaderStyles.containerInfo}>
        <Text style={scoreboardHeaderStyles.labelInfo}>Hasta</Text>
        <Pressable>
          <Text style={scoreboardHeaderStyles.textInfo}>12</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ScoreboardHeader;
