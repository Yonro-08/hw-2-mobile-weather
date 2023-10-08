import { Image, StyleSheet, Text, View } from "react-native";

import { theme } from "../../../../theme";
import { weatherImages } from "../../../../constans";

const ForecastItem = ({ day }) => {
  const date = new Date(day.date);
  const options = { weekday: "long" };
  const dayName = date.toLocaleDateString("en-US", options);

  return (
    <View style={styles.container}>
      <Image
        source={weatherImages[day?.day?.condition?.text]}
        style={{ height: 44, width: 44 }}
      />
      <Text style={{ color: "white", textAlign: "center" }}>
        {dayName.split(",")[0]}
      </Text>
      <Text style={styles.celsius}>{day?.day?.avgtemp_c}&#176;</Text>
    </View>
  );
};

export default ForecastItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 96,
    paddingVertical: 12,
    marginTop: 4,
    marginRight: 16,
    backgroundColor: theme.bgWhite(0.15),
    borderRadius: 24,
  },
  celsius: {
    color: "white",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
  },
});
