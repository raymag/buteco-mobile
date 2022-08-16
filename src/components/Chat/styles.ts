import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {ThemeType} from '../../global/theme';

export const Container = styled.View`
  background: ${(props: any) => props.theme.colors.primary};
  border: solid 1px ${(props: ThemeType) => props.theme.colors.glass};
  border-radius: 10px;
  height: 85%;
  margin: 20px 0;
  padding: 15px 5px;
`;

export const Message = styled.View`
  background: ${(props: any) =>
    props.highlight
      ? props.theme.colors.accent
      : props.theme.colors.background.secondary};
  padding: 10px 5px;
  margin-bottom: 10px;
  border: solid 1px ${(props: ThemeType) => props.theme.colors.glass};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Sender = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props: ThemeType) => props.theme.fonts.subtitle};
  font-weight: bold;
  margin-right: 5px;
`;
export const Text = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props: ThemeType) => props.theme.fonts.content};
`;
