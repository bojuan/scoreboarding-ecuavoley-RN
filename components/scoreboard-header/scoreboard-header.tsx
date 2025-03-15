import { Pressable, Text, View } from "react-native";
import MarkerTimer from "../marker-timer/marker-timer";
import { scoreboardHeaderStyles } from "./scoreboard-header.styles";

const ScoreboardHeader = () => {
  return (
    <View style={scoreboardHeaderStyles.container}>
      <View>
        <Text>Periodo</Text>
        <Pressable>
          <Text>Primer</Text>
        </Pressable>
      </View>
      <MarkerTimer />
      <View>
        <Text>Hasta</Text>
        <Pressable>
          <Text>12</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ScoreboardHeader;
