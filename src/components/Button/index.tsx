import React from 'react';
import {OutlinedBtn, FillBtn, Text} from './styles';

type ButtonProps = {
  text: string;
  type?: 'fill' | 'outlined';
  onPress?: () => void;
  btnStyle?: any;
  textStyle?: any;
  color?: 'primary' | 'accent';
};
const Button = ({
  text,
  type = 'fill',
  onPress = () => null,
  btnStyle,
  textStyle,
  color = 'primary',
}: ButtonProps) => {
  const ButtonTypes = {
    outlined: OutlinedBtn,
    fill: FillBtn,
  };
  const SelectedBtnType = ButtonTypes[type];

  return (
    <SelectedBtnType
      style={({pressed}: any) => [
        {
          transform: [{translateY: pressed ? 2 : 0}],
        },
        btnStyle,
      ]}
      onPress={onPress}
      color={color}
      type={type}>
      <Text color={color} type={type} style={[textStyle]}>
        {text}
      </Text>
    </SelectedBtnType>
  );
};

export default Button;
