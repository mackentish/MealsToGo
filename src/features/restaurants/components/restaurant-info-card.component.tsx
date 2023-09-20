/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import { Restaurant } from "../../../types";

export default function RestaurantInfoCard({
  restaurant = {} as Restaurant,
}: {
  restaurant: Restaurant;
}) {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <Card style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Card.Content>
        <Text style={styles.title}>{name}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    paddingVertical: 16,
  },
});
