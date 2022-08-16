import styled from 'styled-components/native';

export const Footer = styled.View`
  background: ${(props: ThemeType) => props.theme.colors.background.secondary};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border: solid 1px transparent;
  border-top-color: ${(props: ThemeType) => props.theme.colors.glass};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const Input = styled.TextInput`
  background: ${(props: ThemeType) => props.theme.colors.primary};
  padding: 5px 10px;
  border-radius: 10px;
  border: solid 1px ${(props: ThemeType) => props.theme.colors.glass};
  color: ${(props: ThemeType) => props.theme.colors.white};
  width: 75%;
  margin-right: 10px;
`;
