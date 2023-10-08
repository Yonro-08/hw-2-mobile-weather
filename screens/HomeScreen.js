import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Image, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Progress from "react-native-progress";

import SearchBar from "../components/Home/SearchBar/SearchBar";
import WeatherContent from "../components/Home/WeatherContent/WeatherContent";
import OtherStats from "../components/Home/OtherStats/OtherStats";
import Forecast from "../components/Home/Forecast/Forecast";
import { fetchWeatherForecast } from "../lib/api/weather";
import { getData } from "../utils/asyncStorage";

const HomeScreen = () => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchMyWeatherData = async () => {
    const myCity = await getData("city");
    let cityName = "Astana";
    if (myCity) cityName = myCity;
    fetchWeatherForecast({
      cityName,
      days: "7",
    }).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../assets/images/bg.png")}
        style={styles.img}
      />
      {loading ? (
        <View style={styles.loading}>
          <Progress.CircleSnail
            thickness={10}
            size={150}
            color="#0bb3b2"
            style={{ backgroundColor: "transparent" }}
          />
        </View>
      ) : (
        <SafeAreaView style={styles.main}>
          <SearchBar setWeather={setWeather} setLoading={setLoading} />
          <WeatherContent weather={weather} />
          <OtherStats current={weather.current} forecast={weather.forecast} />
          <Forecast forecast={weather.forecast} />
        </SafeAreaView>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "0%",
  },
  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  main: {
    display: "flex",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "0%",
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "0%",
  },
  loadingText: {
    color: "white",
    fontSize: 36,
    lineHeight: 40,
  },
});
