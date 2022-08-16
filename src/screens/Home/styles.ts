import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ThemeType} from '../../global/theme';

export const Veil = styled.View`
  background: ${(props: ThemeType) => props.theme.colors.background.primary};
  min-height: 100%;
  padding: 20px;
`;
export const Container = styled.View`
  background: #22222211;
  padding: 20px 10px;
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
export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  font-family: ${(props: ThemeType) => props.theme.fonts.title};
  text-transform: uppercase;
  text-align: center;
`;

export const ModalVeil = styled.View`
  height: 100%;
  background: #00000099;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContainer = styled.View`
  background: ${(props: ThemeType) => props.theme.colors.white};
  border-radius: 10px;
  border: solid 1px ${(props: ThemeType) => props.theme.colors.glass};
  padding: 20px;
  width: 80%;
`;
export const Text = styled.Text``;
export const Input = styled.TextInput`
  border: solid 3px transparent;
  border-bottom-color: ${(props: ThemeType) => props.theme.colors.primary};
  border-radius: 10px;
  background: #cccccc22;
  margin-top: 10px;
  margin-bottom: 25px;
  padding: 0 10px;
`;
