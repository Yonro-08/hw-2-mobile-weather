import { Image, StyleSheet, View } from "react-native";
import { weatherImages } from "../../../../constans";

const WeatherImage = ({ current }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={weatherImages[current?.condition?.text]}
        style={styles.image}
      />
    </View>
  );
};

export default WeatherImage;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 208,
    height: 208,
  },
});
