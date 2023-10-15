import { StyleSheet, Text, View } from "react-native";

const WeatherTemp = ({ current }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.celsius}>{current?.temp_c}&#176;</Text>
      <Text style={styles.text}>{current?.condition?.text}</Text>
    </View>
  );
};

export default WeatherTemp;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  celsius: {
    marginLeft: 20,
    textAlign: "center",
    color: "white",
    fontSize: 60,
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 2,
  },
});
