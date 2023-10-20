import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    const history = JSON.parse(await AsyncStorage.getItem(key)) || [];

    const newHistory = history.filter((elem) => value !== elem);

    const cities = [value, ...newHistory];

    await AsyncStorage.setItem(key, JSON.stringify(cities));
  } catch (error) {
    console.log("Error storing value: ", error);
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log("Error retrieving value: ", error);
  }
};
