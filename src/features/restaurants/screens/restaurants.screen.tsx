import React, { useState } from "react";
import { RestaurantInfoCard } from "../components";
import { Restaurant } from "../../../types";
import { SafeArea, SearchContainer, Search, List } from "./restaurants.styles";

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
