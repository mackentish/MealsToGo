import styled from "styled-components/native";
import { SafeAreaView, StatusBar, Appearance } from "react-native";
import { Searchbar } from "react-native-paper";

const colorScheme = Appearance.getColorScheme();

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${colorScheme === "dark" ? "black" : "white"};
`;
export const SearchContainer = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.space[3]};
`;
export const Search = styled(Searchbar)`
  display: flex;
  flex-grow: 1;
`;
export const List = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
`;
