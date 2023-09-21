import React, { useState } from "react";
import { SafeAreaView, StatusBar, Appearance } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components";
import { Restaurant } from "../../../types";

const colorScheme = Appearance.getColorScheme();

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${colorScheme === "dark" ? "black" : "white"};
`;
const SearchContainer = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.space[3]};
`;
const Search = styled(Searchbar)`
  display: flex;
  flex-grow: 1;
`;
const List = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
`;

export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeArea>
      <SearchContainer>
        <Search
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search"
          icon="heart-outline"
        />
      </SearchContainer>

      <List>
        <RestaurantInfoCard restaurant={{} as Restaurant} />
      </List>
    </SafeArea>
  );
}
