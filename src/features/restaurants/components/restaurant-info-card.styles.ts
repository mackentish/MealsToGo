import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const Address = styled.Text`
  color: ${({ theme }) => theme.colors.ui.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-vertical: ${({ theme }) => theme.space[1]};
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
