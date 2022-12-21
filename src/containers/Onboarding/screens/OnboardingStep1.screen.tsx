import React, {FC, useReducer} from 'react';
import {StyleSheet, View} from 'react-native';
import ValidatedCorrect from 'src/assets/icons/validated-corect.svg';
import {Button, SizedBox, Text, TextInput} from 'src/components/atomic';
import THEME from 'src/styles/theme.style';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {INITIAL_STATE, formReducer} from '../reducers/formReducer';
import {OnboardingStep1Props} from '../types';

const OnboardingStep1: FC<OnboardingStep1Props> = () => {
  const [formState, dispatch] = useReducer(formReducer, INITIAL_STATE);

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text>Logo</Text>
      </View>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <Text type="BOLD" style={styles.heading}>
          Step 1
        </Text>
        <Text style={styles.subHeading}>Please enter your details</Text>
        <TextInput
          onChangeText={text =>
            dispatch({type: 'SET_OWNER_NAME', payload: text})
          }
          value={formState.ownerName}
          placeholder="Enter your name"
          label="Shop Owner Name"
        />
        <SizedBox height={12} />
        <TextInput
          keyboardType="email-address"
          onChangeText={text =>
            dispatch({type: 'SET_EMAIL_ADDRESS', payload: text})
          }
          value={formState.emailAddress}
          placeholder="abcdefgh@gmail.com"
          label="Email Address"
        />
        {!formState.isEmailAddressValid &&
          formState.emailAddress.length > 0 && (
            <Text style={styles.error}>Email is Not Valid</Text>
          )}
        <SizedBox height={12} />
        <TextInput
          keyboardType="phone-pad"
          isValid={formState.isAadharNumberValid}
          Icon={ValidatedCorrect}
          variant="VALIDATING_ICON"
          maxLength={12}
          onChangeText={text => {
            return dispatch({type: 'SET_AADHAR_NUMBER', payload: text});
          }}
          value={formState.aadharNumber}
          placeholder="1234 5678 0123"
          label="Aadhar Number"
        />
        {!formState.isAadharNumberValid &&
          formState.aadharNumber.length > 0 && (
            <Text style={styles.error}>Aadhar Number is Not Valid</Text>
          )}
        <SizedBox height={12} />
        <TextInput
          autoCapitalize="characters"
          isValid={formState.isPanNumberValid}
          Icon={ValidatedCorrect}
          variant="VALIDATING_ICON"
          maxLength={10}
          onChangeText={text => {
            return dispatch({type: 'SET_PAN_NUMBER', payload: text});
          }}
          value={formState.panNumber}
          placeholder="ABCD1234E"
          label="PAN Number"
        />
        {!formState.isPanNumberValid && formState.panNumber.length > 0 && (
          <Text style={styles.error}>PAN Number is Not Valid</Text>
        )}
        {formState.isPanNumberValid && (
          <>
            <SizedBox height={12} />
            <TextInput
              autoCapitalize="characters"
              onChangeText={text =>
                dispatch({type: 'SET_DATE_OF_BIRTH', payload: text})
              }
              value={formState.dateOfBirth}
              placeholder="DD/MM/YYYY"
              label="Date of Birth"
            />
            {!formState.isDateOfBirthValid && (
              <Text style={styles.error}>Date of Birth is Not Valid</Text>
            )}
          </>
        )}
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={() => console.log(formState)}
          isDisabled={!formState.isFormValid}>
          <Text style={styles.buttonText} type="BOLD">
            Submit
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
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

  buttonContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    marginHorizontal: 20,
  },
  button: {},
  buttonText: {
    color: THEME.Text.White,
    fontSize: 20,
    letterSpacing: 1,
  },
});
export default OnboardingStep1;
