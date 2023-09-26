import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard, Search } from "../components";
import { CenteredView, SafeArea } from "../../../components/utility";
import { Spacer, RestaurantList } from "./restaurants.styles";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { useTheme } from "styled-components";
import { NavigationProp } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { FavoritesBar } from "../../../components/favorites";

type Props = {
  navigation: NavigationProp<any>;
};

export default function RestaurantsScreen({ navigation }: Props) {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const theme = useTheme();

  return (
    <SafeArea>
      <Search
        onFavoritesToggle={() => setIsToggled(!isToggled)}
        isFavoritesToggled={isToggled}
      />
      {isToggled && <FavoritesBar onNavigate={navigation.navigate} />}
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
      )}
    </SafeArea>
  );
}
