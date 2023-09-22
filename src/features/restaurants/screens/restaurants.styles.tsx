import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

export const SearchContainer = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.space[3]};
`;
export const Search = styled(Searchbar)`
  display: flex;
  flex-grow: 1;
`;
export const Spacer = styled.View`
  height: ${({ theme }) => theme.space[3]};
`;
export const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
