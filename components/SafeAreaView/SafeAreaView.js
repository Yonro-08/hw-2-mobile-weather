import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

const SafeAreaView = (props) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        props.style,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      {props.children}
    </View>
  );
};

export default SafeAreaView;
