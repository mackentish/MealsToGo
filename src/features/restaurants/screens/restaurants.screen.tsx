import React, { useState } from "react";
import { RestaurantInfoCard } from "../components";
import { SafeArea } from "../../../components/utility";
import {
  SearchContainer,
  Search,
  Spacer,
  RestaurantList,
} from "./restaurants.styles";
import { Restaurant } from "../../../types";

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
      <RestaurantList
        data={
          [
            { name: "Restaurant 1" },
            { name: "Restaurant 2" },
            { name: "Restaurant 3" },
            { name: "Restaurant 4" },
            { name: "Restaurant 5" },
            { name: "Restaurant 6" },
            { name: "Restaurant 7" },
            { name: "Restaurant 8" },
            { name: "Restaurant 9" },
            { name: "Restaurant 10" },
          ] as Restaurant[]
        }
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        ItemSeparatorComponent={Spacer}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
