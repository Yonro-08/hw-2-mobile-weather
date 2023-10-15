import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreenNavigation from "./HomeScreenNavigation";
import HistoryScreenNavigation from "./HistoryScreenNavigation";

const Tab = createBottomTabNavigator();

LogBox.ignoreAllLogs([
  "Non serializable values were found in the navigation state",
]);

const AppNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreenNavigation}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="History"
            component={HistoryScreenNavigation}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
