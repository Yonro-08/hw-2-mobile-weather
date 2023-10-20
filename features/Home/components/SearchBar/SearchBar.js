import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import SearchForm from "../SearchForm/SearchForm";
import SearchTips from "../SearchTips/SearchTips";

const SearchBar = () => {
  const [showSearch, toggleSearch] = useState(false);
  const { locations } = useSelector((state) => state.locations);

  return (
    <View style={styles.search}>
      <SearchForm showSearch={showSearch} toggleSearch={toggleSearch} />
      {locations.length > 0 && showSearch ? (
        <SearchTips locations={locations} toggleSearch={toggleSearch} />
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
