import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

export const SearchContainer = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
`;
export const SearchBar = styled(Searchbar)`
  display: flex;
  flex-grow: 1;
`;
export default function Search() {
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
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        placeholder="Search for a location"
        icon="map"
      />
    </SearchContainer>
  );
}
