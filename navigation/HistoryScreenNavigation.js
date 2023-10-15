import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HistoryScreen from "../screens/HistoryScreen";

const Stack = createNativeStackNavigator();

const HistoryScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
    </Stack.Navigator>
  );
};

export default HistoryScreenNavigation;
