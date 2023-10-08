import { StyleSheet, View } from "react-native";

import WeatherLocation from "./WeatherLocation/WeatherLocation";
import WeatherImage from "./WeatherImage/WeatherImage";
import WeatherTemp from "./WeatherTemp/WeatherTemp";

const WeatherContent = ({ weather }) => {
  return (
    <View style={styles.weather}>
      <WeatherLocation location={weather.location} />
      <WeatherImage current={weather.current} />
      <WeatherTemp current={weather.current} />
    </View>
  );
};

export default WeatherContent;

const styles = StyleSheet.create({
  weather: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "0%",
    justifyContent: "space-around",
    marginHorizontal: 16,
    marginBottom: 8,
  },
});
