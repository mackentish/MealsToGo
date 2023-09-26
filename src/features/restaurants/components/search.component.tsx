import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

export const SearchContainer = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.space[3]};
`;
export const SearchBar = styled(Searchbar)`
  display: flex;
  flex-grow: 1;
`;
export default function Search({
  onFavoritesToggle,
  isFavoritesToggled,
}: {
  onFavoritesToggle: () => void;
  isFavoritesToggled: boolean;
}) {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        icon={isFavoritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavoritesToggle}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        placeholder="Search for a location"
      />
    </SearchContainer>
  );
}
