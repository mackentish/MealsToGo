import React, { useState, useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components";
import { CenteredView, SafeArea } from "../../../components/utility";
import {
  SearchContainer,
  Search,
  Spacer,
  RestaurantList,
} from "./restaurants.styles";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { useTheme } from "styled-components";

export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const theme = useTheme();

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
      {isLoading && (
        <CenteredView>
          <ActivityIndicator
            animating={true}
            color={theme.colors.brand.primary}
            size={50}
          />
        </CenteredView>
      )}
      {!isLoading && !error && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          ItemSeparatorComponent={Spacer}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
}
