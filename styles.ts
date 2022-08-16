import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {ThemeType} from './src/global/theme';

export const Veil = styled.View`
  background: ${(props: ThemeType) => props.theme.colors.background.primary};
  min-height: 100%;
  padding: 20px;
`;
export const Container = styled.View`
  // background: ${(props: ThemeType) =>
    props.theme.colors.background.secondary};
  background: #22222211;
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  min-width: 90%;
  height: 80%;
`;
export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
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
export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  font-family: ${(props: ThemeType) => props.theme.fonts.title};
  text-transform: uppercase;
  text-align: center;
`;
