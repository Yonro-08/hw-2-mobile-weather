import { useEffect } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Progress from "react-native-progress";

import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import {
  SearchBar,
  WeatherContent,
  OtherStats,
  Forecast,
} from "../features/Home";

import { fetchWeatherForecast } from "../store/weatherSlice";
import { getData } from "../utils/asyncStorage";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  const { weather, loaded: weatherLoaded } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  const fetchMyWeatherData = async () => {
    const myCity = JSON.parse(await getData("cities"));
    let cityName = "Astana";
    if (myCity.length > 0) cityName = myCity[0];
    dispatch(
      fetchWeatherForecast({
        cityName,
        days: "7",
      })
    );
  };

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      blurRadius={70}
      style={styles.flex}
    >
      <SafeAreaView style={styles.flex}>
        <StatusBar style="light" />
        {!weatherLoaded ? (
          <View style={styles.loading}>
            <Progress.CircleSnail
              thickness={10}
              size={150}
              color="#0bb3b2"
              style={{ backgroundColor: "transparent" }}
            />
          </View>
        ) : (
          <SafeAreaView style={styles.flex}>
            <SearchBar />
            <WeatherContent weather={weather} />
            <OtherStats current={weather.current} forecast={weather.forecast} />
            <Forecast forecast={weather.forecast} />
          </SafeAreaView>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  loadingText: {
    color: "white",
    fontSize: 36,
    lineHeight: 40,
  },
});
