import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { formatTime } from "../../shared/functions/format-time/format-time";
import { markerTimerStyles } from "./marker-timer.styles";

const MarkerTimer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }

    console.log({ isRunning, seconds });
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const stopTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <View style={markerTimerStyles.container}>
      <View style={markerTimerStyles.containerLabel}>
        <Text style={markerTimerStyles.textLabel}>Tiempo</Text>
      </View>
      <Pressable style={markerTimerStyles.containerTime} onPress={stopTimer}>
        <Text style={markerTimerStyles.textTime}>{formatTime(seconds)}</Text>
      </Pressable>
    </View>
  );
};

export default MarkerTimer;
