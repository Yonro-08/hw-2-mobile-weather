import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLocations } from "../lib/api/weather";

const initialState = {
  locations: [],
  loaded: false,
};

export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  async (params) => {
    const response = await getLocations(params);
    return response;
  }
);

const locationsSlice = createSlice({
  name: "locations",
  initialState: { ...initialState },
  reducers: {
    clearLocationsList(state) {
      state.locations = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocations.pending, (state) => {
      state.loaded = false;
    });
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      state.locations = action.payload;
      state.loaded = true;
    });
  },
});

export const { clearLocationsList } = locationsSlice.actions;
export default locationsSlice.reducer;
