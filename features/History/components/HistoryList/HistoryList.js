import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { BackspaceIcon } from "react-native-heroicons/outline";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { fetchWeatherForecast } from "../../../../store/weatherSlice";
import { getData } from "../../../../utils/asyncStorage";

const HistoryList = ({ cityName, setHistory }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onPress = async () => {
    navigation.navigate("Home");
    dispatch(
      fetchWeatherForecast({
        cityName,
        days: "7",
      })
    );
  };

  const onDelete = async () => {
    const data = JSON.parse(await getData("cities"));
    const filterData = data.filter((elem) => elem !== cityName);
    setHistory(filterData);
    await AsyncStorage.setItem("cities", JSON.stringify(filterData));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{cityName}</Text>
      <TouchableOpacity>
        <BackspaceIcon size={22} color="black" onPress={onDelete} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default HistoryList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  text: {
    fontWeight: "700",
    fontSize: 16,
  },
});
