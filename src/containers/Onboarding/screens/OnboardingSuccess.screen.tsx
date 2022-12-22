import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {OnboardingSuccessProps} from '../types';
import THEME from 'src/styles/theme.style';
import {SizedBox, Text} from 'src/components/atomic';
import Success from 'src/assets/icons/success.svg';

const OnboardingSuccess: FC<OnboardingSuccessProps> = ({route}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.middle}>
          <Success width={100} height={100} />
          <SizedBox height={20} />
          <Text style={styles.message}>{route.params?.message}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.UI.Success,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 24,
    color: THEME.Text.White,
  },
});
export default OnboardingSuccess;
