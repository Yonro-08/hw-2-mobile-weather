import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { debounce } from "lodash";

import SearchForm from "../SearchForm/SearchForm";
import SearchTips from "../SearchTips/SearchTips";

import { fetchLocations } from "../../../../lib/api/weather";

const SearchBar = ({ setWeather, setLoading }) => {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);

  const handleSearch = (value) => {
    // fetch locations
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then((data) => {
        setLocations(data);
      });
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  return (
    <View style={styles.search}>
      <SearchForm
        showSearch={showSearch}
        toggleSearch={toggleSearch}
        handleTextDebounce={handleTextDebounce}
      />
      {locations.length > 0 && showSearch ? (
        <SearchTips
          locations={locations}
          setLocations={setLocations}
          toggleSearch={toggleSearch}
          setWeather={setWeather}
          setLoading={setLoading}
        />
      ) : null}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  search: {
    position: "relative",
    height: "7%",
    marginHorizontal: 16,
    zIndex: 50,
  },
});
