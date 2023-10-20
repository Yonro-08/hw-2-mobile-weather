import axios from "axios";
import { apiKey } from "../../constans";

const forecastEndpoint = ({ cityName, days }) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=${days}&aqi=no&alerts=no`;

const locationsEndpoint = ({ cityName }) =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${cityName}`;

const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

export const getWeatherForecast = (params) => {
  return apiCall(forecastEndpoint(params));
};

export const getLocations = (params) => {
  return apiCall(locationsEndpoint(params));
};
