// import {FC, SVGProps} from 'react';

import {SvgProps} from 'react-native-svg';
import {TextInputProps as RNTextInputProps} from 'react-native';
interface BaseTextInputProps {
  variant?: 'DEFAULT';
  label: string;
  placeholder: string;

  value: string;
  onChangeText?: (value: string) => void;
}

export interface TextInputWithValidatingIconProps {
  variant?: 'VALIDATING_ICON';
  label: string;
  placeholder: string;
  Icon: React.FC<SvgProps>;

  value: string;
  onChangeText: (value: string) => void;
  isValid: boolean;
}

export type TextInputProps =
  | RNTextInputProps & (BaseTextInputProps | TextInputWithValidatingIconProps);
