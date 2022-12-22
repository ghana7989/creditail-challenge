import React, {FC, useCallback, useState} from 'react';
import {Dimensions, Keyboard, Pressable, StyleSheet, View} from 'react-native';
import Pdf from 'react-native-pdf';
import SubmitArrow from 'src/assets/icons/submit-arrow.svg';
import OTPInput from 'src/components/OTPInputField';
import {SizedBox, Text} from 'src/components/atomic';
import THEME from 'src/styles/theme.style';
import {OnboardingStep2Props} from '../types';

const {width, height} = Dimensions.get('window');

const OnboardingStep2: FC<OnboardingStep2Props> = ({navigation}) => {
  const [otp, setOtp] = useState('');
  const [isOTPReady, setIsOTPReady] = useState(false);
  const updateOTP = useCallback((newOTP: string) => {
    setOtp(newOTP);
  }, []);

  const verifyOTP = React.useCallback(async () => {
    if (!isOTPReady) {
      return;
    }
    const response = await fetch(
      'http://mockbin.org/bin/5fe58bba-fdc0-4090-9aa6-fba8d2ae1c4b',
      {
        method: 'POST',
        body: JSON.stringify({
          otp,
        }),
      },
    );
    const data = await response.json();
    if (data.otp as any) {
      console.log('OTP verified');
      navigation.navigate('OnboardingSuccess', {
        message: 'Onboarding Successful',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otp, isOTPReady]);

  const updateIsOTPReady = useCallback(
    (isReady: boolean) => {
      if (isReady === isOTPReady) {
        return;
      }
      setIsOTPReady(isReady);
    },
    [isOTPReady],
  );

  return (
    <Pressable onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text type="BOLD" style={styles.heading}>
          Step 2
        </Text>
        <Text style={styles.subHeading}>Please enter OTP</Text>
        <View style={styles.pdfContainer}>
          <Pdf
            trustAllCerts={false}
            source={require('src/assets/pdf/sample.pdf')}
            style={styles.pdf}
          />
        </View>
      </View>
      <SizedBox height={6} />
      <View style={styles.otpContainer}>
        <Text type="BOLD" style={styles.enterOTP}>
          Enter OTP
        </Text>
        <SizedBox height={6} />
        <View style={styles.otpInputContainer}>
          <OTPInput
            otp={otp}
            updateIsOTPReady={updateIsOTPReady}
            updateOTP={updateOTP}
            otpLength={4}
          />
          <Pressable onPress={verifyOTP} style={styles.submitButton}>
            <SubmitArrow />
          </Pressable>
        </View>
        <Text style={styles.footerText1}>Didn't get the code yet?</Text>
        <Pressable
          onPress={() => {
            console.log('Resend');
          }}>
          <Text style={styles.footerText2} type="BOLD">
            Resend
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    height: height * 0.65,
    paddingHorizontal: 20,
    paddingTop: 30,
    position: 'relative',
  },
  pdfContainer: {
    flex: 1,
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height * 0.5,
    backgroundColor: 'grey',
  },
  otpContainer: {
    width,
    height: height * 0.35,
    backgroundColor: THEME.UI.Primary.Blue,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  otpInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  submitButton: {
    borderRadius: THEME.RADIUS.full,
    backgroundColor: THEME.UI.White[1],
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    color: THEME.Text.Black,
  },
  subHeading: {
    fontSize: 20,
    color: THEME.Text.Black,
  },
  error: {
    color: THEME.Text.Red,
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  footerText1: {
    fontSize: 16,
    color: THEME.Text.White,
  },
  footerText2: {
    fontSize: 22,
    color: THEME.Text.White,
  },
  enterOTP: {
    fontSize: 24,
    color: THEME.Text.White,
  },
});
export default OnboardingStep2;
