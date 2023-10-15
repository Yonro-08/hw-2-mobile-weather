import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

import { theme } from "../../../../theme/index";

const SearchForm = ({ showSearch, toggleSearch, handleTextDebounce }) => {
  return (
    <KeyboardAvoidingView>
      <View
        style={[
          styles.container,
          {
            backgroundColor: showSearch ? theme.bgWhite(0.4) : "transparent",
          },
        ]}
      >
        {showSearch ? (
          <TextInput
            placeholder="Search city"
            placeholderTextColor="lightgrey"
            style={styles.input}
            onChangeText={handleTextDebounce}
          />
        ) : null}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            toggleSearch(!showSearch);
            Keyboard.dismiss();
          }}
        >
          <MagnifyingGlassIcon size={25} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SearchForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 50,
  },
  input: {
    flex: 1,
    height: 40,
    paddingBottom: 4,
    paddingLeft: 24,
    color: "white",
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    margin: 4,
    padding: 12,
    backgroundColor: theme.bgWhite(0.3),
    borderRadius: 50,
  },
});
