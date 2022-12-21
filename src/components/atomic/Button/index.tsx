import React, {FC} from 'react';
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import THEME from 'src/styles/theme.style';

interface ButtonProps extends PressableProps {
  onPress: (event: GestureResponderEvent) => void;
  isDisabled: boolean;
  style: StyleProp<ViewStyle>;
}
const Button: FC<ButtonProps> = props => {
  return (
    <>
      <Pressable
        {...props}
        style={[
          props.style,
          styles.button,
          props.isDisabled && styles.disabledButton,
        ]}
        onPress={
          props.isDisabled
            ? () => {}
            : (event: GestureResponderEvent) => props.onPress(event)
        }>
        {props.children}
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: THEME.UI.Primary.Blue,
    height: THEME.SIZE.HUGE,
    borderRadius: THEME.RADIUS.DEFAULT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: THEME.UI.Grey[1],
  },
});
export default Button;
