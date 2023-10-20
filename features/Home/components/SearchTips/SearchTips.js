import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MapPinIcon } from "react-native-heroicons/solid";

import { fetchWeatherForecast } from "../../../../store/weatherSlice";
import { clearLocationsList } from "../../../../store/locationsSlice";
import { useDispatch } from "react-redux";

const SearchTips = ({ locations, toggleSearch }) => {
  const dispatch = useDispatch();

  const handleLocation = (location) => {
    dispatch(clearLocationsList());
    toggleSearch(false);
    dispatch(
      fetchWeatherForecast({
        cityName: location.name,
        days: "7",
      })
    );
  };

  return (
    <View style={styles.tips}>
      {locations.map((location, index) => {
        const showBorder = index + 1 != locations.length;
        const borderStyle = showBorder
          ? {
              borderBottomWidth: 2,
              borderBottomColor: "rgb(156 163 175)",
            }
          : null;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.tipsLocation, borderStyle]}
            onPress={() => handleLocation(location)}
          >
            <MapPinIcon size={20} color="gray" />
            <Text style={styles.tipsText}>
              {location?.name}, {location?.country}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SearchTips;

const styles = StyleSheet.create({
  tips: {
    position: "absolute",
    top: 64,
    width: "100%",
    backgroundColor: "rgb(209 213 219)",
    borderRadius: 30,
  },
  tipsLocation: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    paddingHorizontal: 16,
    marginBottom: 4,
    border: "none",
  },
  tipsText: {
    marginLeft: 8,
    color: "black",
    fontSize: 18,
    lineHeight: 28,
  },
});
