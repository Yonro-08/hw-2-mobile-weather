import { Provider } from "react-redux";

import store from "./store";
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
