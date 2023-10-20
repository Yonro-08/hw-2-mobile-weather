import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getWeatherForecast } from "../lib/api/weather";
import { storeData } from "../utils/asyncStorage";

const initialState = {
  weather: {},
  loaded: false,
};

export const fetchWeatherForecast = createAsyncThunk(
  "weatherForecast/fetchWeatherForecast",
  async (params) => {
    const response = await getWeatherForecast(params);
    await storeData("cities", params.cityName);
    return response;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: { ...initialState },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherForecast.pending, (state) => {
      state.loaded = false;
    });
    builder.addCase(fetchWeatherForecast.fulfilled, (state, action) => {
      state.weather = action.payload;
      state.loaded = true;
    });
  },
});

export default weatherSlice.reducer;
