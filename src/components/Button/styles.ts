import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {ThemeType} from '../../global/theme';

type ButtonProps = ThemeType & {
  color?: 'primary' | 'accent';
};

export const OutlinedBtn = styled.Pressable`
  border: solid 3px
    ${(props: ButtonProps) =>
      props.color === 'accent'
        ? props.theme.colors.accent
        : props.theme.colors.primary};
  padding: 5px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  min-width: 80px;
  min-height: 35px;
`;
export const FillBtn = styled.Pressable`
  background: ${(props: ButtonProps) =>
    props.color === 'accent'
      ? props.theme.colors.accent
      : props.theme.colors.primary};
  padding: 5px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  margin: 0;
  min-height: 35px;
`;
export const Text = styled.Text`
  margin: 0;
  padding: 0;
  color: ${(props: any) =>
    props.type === 'outlined'
      ? props.color === 'primary'
        ? props.theme.colors.primary
        : props.theme.colors.accent
      : props.color === 'primary'
      ? props.theme.colors.white
      : props.theme.colors.primary};
  font-size: ${RFValue(14)}px;
  font-family: ${(props: ThemeType) => props.theme.fonts.subtitle};
  font-weight: bold;
  text-transform: uppercase;
`;
