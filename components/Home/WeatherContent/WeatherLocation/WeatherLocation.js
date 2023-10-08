import { StyleSheet, Text } from "react-native";

const WeatherLocation = ({ location }) => {
  return (
    <Text style={styles.locationCity}>
      {location?.name},{" "}
      <Text style={styles.locationCountry}>{location?.country}</Text>
    </Text>
  );
};

export default WeatherLocation;

const styles = StyleSheet.create({
  locationCity: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
  locationCountry: {
    color: "rgb(209 213 219)",
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "600",
  },
});
