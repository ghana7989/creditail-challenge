import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  TextInput as RNTextInput,
  Dimensions,
} from 'react-native';
import {TextInputProps} from './types';
import THEME from '../../../styles/theme.style';
import Text from '../Text';
import TextInputWithValidatingIcon from './TextInputWithSuffixIcon';

const {width} = Dimensions.get('screen');

const TextInput: FC<TextInputProps> = props => {
  if (props.variant === 'VALIDATING_ICON') {
    return <TextInputWithValidatingIcon {...props} />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <RNTextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor={THEME.UI.Grey[1]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: width - 40,
    height: 60,
  },
  label: {
    fontSize: 12,
    marginLeft: 1,
  },
  input: {
    borderColor: THEME.UI.Grey[1],
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    flex: 1,
  },
});
export default TextInput;
