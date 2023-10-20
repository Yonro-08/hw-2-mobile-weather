import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BookmarkIcon } from "react-native-heroicons/solid";
import { CloudIcon } from "react-native-heroicons/solid";

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
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Home"
            component={HomeScreenNavigation}
            options={{
              tabBarIcon: ({ color, size }) => {
                return <CloudIcon size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="History"
            component={HistoryScreenNavigation}
            options={{
              tabBarIcon: ({ color, size }) => {
                return <BookmarkIcon size={size} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
