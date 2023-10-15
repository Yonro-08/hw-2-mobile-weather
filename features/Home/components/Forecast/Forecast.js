import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CalendarDaysIcon } from "react-native-heroicons/outline";

import ForecastItem from "../ForecastItem/ForecastItem";

const Forecast = ({ forecast }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <CalendarDaysIcon size={22} color="white" />
        <Text style={styles.title}>Daily forecast</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {forecast?.forecastday.map((item, index) => {
          return <ForecastItem key={index} day={item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Forecast;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 20,
    marginBottom: 8,
  },
  title: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
  },
});
