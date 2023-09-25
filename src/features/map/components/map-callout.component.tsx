import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant";
import { Restaurant } from "../../../types";

export default function MapCallout({ restaurant }: { restaurant: Restaurant }) {
  return <CompactRestaurantInfo restaurant={restaurant} />;
}
