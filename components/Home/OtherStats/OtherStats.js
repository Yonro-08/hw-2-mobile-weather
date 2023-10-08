import { Image, StyleSheet, Text, View } from "react-native";

const OtherStats = ({ current, forecast }) => {
  return (
    <View style={styles.otherStats}>
      <View style={styles.stat}>
        <Image
          source={require("../../../assets/icons/wind.png")}
          style={styles.image}
        />
        <Text style={styles.text}>{current?.wind_kph}km</Text>
      </View>
      <View style={styles.stat}>
        <Image
          source={require("../../../assets/icons/drop.png")}
          style={styles.image}
        />
        <Text style={styles.text}>{current?.humidity}%</Text>
      </View>
      <View style={styles.stat}>
        <Image
          source={require("../../../assets/icons/sun.png")}
          style={styles.image}
        />
        <Text style={styles.text}>
          {forecast?.forecastday[0]?.astro?.sunrise} AM
        </Text>
      </View>
    </View>
  );
};

export default OtherStats;

const styles = StyleSheet.create({
  otherStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginLeft: 8,
  },
  image: {
    height: 24,
    width: 24,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
});
