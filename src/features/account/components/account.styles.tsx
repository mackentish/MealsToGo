import styled from "styled-components/native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountOpacity = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[2]};
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
`;
