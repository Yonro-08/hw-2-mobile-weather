import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import { HistoryList } from "../features/History/index";
import { getData } from "../utils/asyncStorage";

const HistoryScreen = () => {
  const [history, setHistory] = useState([]);
  const { weather } = useSelector((state) => state.weather);

  useEffect(() => {
    (async () => {
      const data = JSON.parse(await getData("cities"));
      setHistory(data);
    })();
  }, [weather]);

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      blurRadius={70}
      style={styles.flex}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>History</Text>
          <TouchableOpacity
            onPress={async () => {
              setHistory([]);
              await AsyncStorage.removeItem("cities");
            }}
          >
            <Text style={styles.title}>Очистить Историю</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={history}
          renderItem={({ item }) => (
            <HistoryList cityName={item} setHistory={setHistory} />
          )}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
  },
});
