import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { debounce } from "lodash";

import { fetchLocations } from "../../../../store/locationsSlice";
import { theme } from "../../../../theme/index";

const SearchForm = ({ showSearch, toggleSearch }) => {
  const dispatch = useDispatch();

  const handleSearch = (value) => {
    // fetch locations
    if (value.length > 2) {
      dispatch(fetchLocations({ cityName: value }));
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

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
