import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import THEME from 'src/styles/theme.style';
import {Text} from '../atomic';

interface OTPInputProps {
  updateIsOTPReady: (isOTPReady: boolean) => void;
  otp: string;
  updateOTP: (otp: string) => void;
  otpLength?: number;
}

const OTPInput: FC<OTPInputProps> = ({
  otp,
  updateIsOTPReady,
  updateOTP,
  otpLength = 4,
}) => {
  const otpDigitsArray = new Array(otpLength).fill(0);
  const textInputRef = React.useRef<TextInput>(null);
  const handleBlur = () => {
    textInputRef.current?.blur();
  };
  const handleOnPress = () => {
    textInputRef.current?.focus();
  };

  const transformToDigitInput = (_: number, index: number) => {
    const digit = otp[index] || ' ';

    const isCurrentDigit = index === otp.length;
    const isLastDigit = index === otpLength - 1;
    const isOTPReady = otp.length === otpLength;

    const isDigitFocused = isCurrentDigit || (isLastDigit && isOTPReady);

    return (
      <View
        style={
          isDigitFocused
            ? styles.digitInputBoxFocused
            : styles.digitInputBoxNotFocused
        }
        key={index}>
        <Text type="BOLD" style={styles.digit}>
          {digit}
        </Text>
      </View>
    );
  };

  return (
    <>
      <Pressable onPress={handleOnPress} style={styles.otpInputContainer}>
        {otpDigitsArray.map(transformToDigitInput)}
      </Pressable>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TextInput
          pointerEvents="none"
          ref={textInputRef}
          style={styles.hiddenTextInput}
          value={otp}
          onChangeText={text => {
            updateOTP(text);
            updateIsOTPReady(text.length === otpLength);
          }}
          keyboardType="phone-pad"
          maxLength={otpLength}
          returnKeyType="done"
          textContentType="oneTimeCode"
          onBlur={handleBlur}
        />
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    alignSelf: 'flex-start',
  },
  digitInputBoxFocused: {
    height: 48,
    minWidth: 48,
    borderRadius: THEME.RADIUS.sm,
    backgroundColor: THEME.UI.White[700],
    padding: 12,
  },
  digitInputBoxNotFocused: {
    height: 48,
    minWidth: 48,
    borderRadius: THEME.RADIUS.sm,
    backgroundColor: THEME.UI.White[500],
    padding: 12,
  },
  digit: {
    color: THEME.Text.Black,
    textAlign: 'center',
  },
  hiddenTextInput: {
    backgroundColor: 'black',
    width: 10,
    height: 10,
    opacity: 0,
    position: 'absolute',
    bottom: -100,
    right: 0,
  },
});
export default OTPInput;
