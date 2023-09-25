import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";
import { Search, MapCallout } from "../components";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { NavigationProp } from "@react-navigation/native";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export default function MapScreen({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);
  const { viewport, lat, lng } = location!;

  useEffect(() => {
    if (location) {
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;
      setLatDelta(northeastLat - southwestLat);
    }
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: Number.parseFloat(lat),
          longitude: Number.parseFloat(lng),
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
}
