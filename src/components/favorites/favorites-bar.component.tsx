import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { Text } from "../typography";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import { CompactRestaurantInfo } from "../restaurant";

const FavoritesBarView = styled.View`
  padding: 10px;
`;

const Spacer = styled.View`
  width: 8px;
`;

export default function FavoritesBar({ onNavigate }: { onNavigate: any }) {
  const { favorites } = useContext(FavoritesContext);
  return (
    <FavoritesBarView>
      <Text>Favorites</Text>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => onNavigate("RestaurantDetail", { item })}
            >
              <CompactRestaurantInfo restaurant={item} isMap={false} />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={Spacer}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Text>No favorites yet</Text>
      )}
    </FavoritesBarView>
  );
}
