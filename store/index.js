import { configureStore } from "@reduxjs/toolkit";

import locationsSlice from "./locationsSlice";
import weatherSlice from "./weatherSlice";

const store = configureStore({
  reducer: {
    locations: locationsSlice,
    weather: weatherSlice,
  },
});

export default store;
