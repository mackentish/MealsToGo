import React, { useContext } from "react";
import styled from "styled-components/native";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { SafeArea } from "../../../components/utility";
import { Text } from "../../../components/typography";
import {
  RestaurantList,
  Spacer,
} from "../../restaurants/screens/restaurants.styles";
import { TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../../restaurants/components";

const FavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export default function FavoritesScreen({ navigation }: { navigation: any }) {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("RestaurantDetail")}
          >
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={Spacer}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <FavoritesArea>
      <Text>No favorites yet</Text>
    </FavoritesArea>
  );
}
