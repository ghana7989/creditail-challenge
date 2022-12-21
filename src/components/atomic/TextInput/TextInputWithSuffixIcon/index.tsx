import React, {FC} from 'react';
import {
  Dimensions,
  TextInput as RNTextInput,
  StyleSheet,
  View,
} from 'react-native';
import {Text} from 'src/components/atomic';
import THEME from 'src/styles/theme.style';
import {TextInputWithValidatingIconProps} from '../types';

const {width} = Dimensions.get('screen');

const TextInputWithValidatingIcon: FC<
  TextInputWithValidatingIconProps
> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <RNTextInput
          {...props}
          style={styles.input}
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          placeholderTextColor={THEME.UI.Grey[1]}
        />
        {props.isValid && <props.Icon style={styles.icon} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: width - 40,
    height: 60,
    position: 'relative',
  },
  inputContainer: {
    flex: 1,
    width: width - 40,
  },
  label: {
    fontSize: 12,
    marginLeft: 1,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  input: {
    borderColor: THEME.UI.Grey[1],
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    flex: 1,
  },
});
export default TextInputWithValidatingIcon;
