import styled from "styled-components/native";

export const Spacer = styled.View`
  height: ${({ theme }) => theme.space[3]};
`;
export const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
