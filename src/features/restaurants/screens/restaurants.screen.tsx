import React, { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard, Search } from "../components";
import { CenteredView, SafeArea } from "../../../components/utility";
import { Spacer, RestaurantList } from "./restaurants.styles";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { useTheme } from "styled-components";

export default function RestaurantsScreen() {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const theme = useTheme();

  return (
    <SafeArea>
      <Search />
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
