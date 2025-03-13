import { FC } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { matchIndicatorStyles } from "./match-indicator.styles";

type periods = "one" | "two" | "three";

interface MatchIndicatorProps {
  isThirdPeriod?: boolean;
  periodsWon: periods[];
}

const MatchIndicator: FC<MatchIndicatorProps> = ({
  isThirdPeriod,
  periodsWon,
}) => {
  const getIndicator = (currentPeriod: periods) => {
    let style: StyleProp<ViewStyle> = [matchIndicatorStyles.indicator];
    if (periodsWon.includes(currentPeriod)) {
      style = [...style, matchIndicatorStyles.indicatorSelected];
    }
    return <View style={style}></View>;
  };

  return (
    <View style={matchIndicatorStyles.container}>
      {getIndicator("one")}
      {getIndicator("two")}

      {isThirdPeriod && getIndicator("three")}
    </View>
  );
};

export default MatchIndicator;
