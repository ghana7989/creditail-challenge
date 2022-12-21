import React, {FC, useCallback, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import ValidatedCorrect from 'src/assets/icons/validated-corect.svg';
import {Button, SizedBox, Text, TextInput} from 'src/components/atomic';
import THEME from 'src/styles/theme.style';

import {yupResolver} from '@hookform/resolvers/yup';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {schema1} from '../schema';
import {Form1Inputs, OnboardingStep1Props} from '../types';

const OnboardingStep1: FC<OnboardingStep1Props> = () => {
  const [isAadharValid, setIsAadharValid] = useState(false);
  const [isPANCardValid, setIsPANCardValid] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      ownerName: '',
      emailAddress: '',
      aadharNumber: '',
      panNumber: '',
    },
    resolver: yupResolver(schema1),
  });
  const onSubmit = (data: Form1Inputs) => {
    return console.log(data);
  };

  const validateAadhar = async (value: string) => {
    if (value.length === 12 && !!value.match(/^[0-9]{12}$/i)) {
      console.log(value);
      // Make an API call to check if the aadhar number is valid
      const res = await new Promise(resolve => {
        setTimeout(() => {
          resolve(false);
        }, 2000);
      });

      if (!res) {
        setError(
          'aadharNumber',
          {
            type: 'manual',
            message: 'Invalid Aadhar Number',
          },
          {
            shouldFocus: true,
          },
        );
        return false;
      }
      setIsAadharValid(true);
      return true;
    } else {
      setIsAadharValid(false);
      return false;
    }
  };

  const validatePAN = useCallback(async (value: string) => {
    if (value.length === 10 && !!value.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i)) {
      // Make an API call to check if the PAN number is valid
      const res = await new Promise(resolve => {
        setTimeout(() => {
          resolve(true);
        }, 2000);
      });
      if (!res) {
        return false;
      }
      setIsPANCardValid(true);
      return true;
    } else {
      setIsPANCardValid(false);
      return false;
    }
  }, []);

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
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              placeholder="Enter your name"
              label="Shop Owner Name"
            />
          )}
          name="ownerName"
        />
        {errors.ownerName && (
          <Text style={styles.error}>*Name is required.</Text>
        )}
        <SizedBox height={12} />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => {
            return (
              <TextInput
                keyboardType="email-address"
                onChangeText={onChange}
                value={value}
                placeholder="abcdefgh@gmail.com"
                label="Email Address"
              />
            );
          }}
          name="emailAddress"
        />
        {errors.emailAddress && (
          <Text style={styles.error}>
            {errors.emailAddress.message || '*Email is required.'}
          </Text>
        )}
        <SizedBox height={12} />
        <Controller
          control={control}
          rules={{
            required: true,
            max: 12,
            min: 12,
            pattern: {
              value: /^[0-9]{12}$/i,
              message: 'Invalid Aadhar Number',
            },
          }}
          render={({field: {onChange, value}}) => {
            validateAadhar(value);
            return (
              <TextInput
                keyboardType="phone-pad"
                isValid={isAadharValid}
                Icon={ValidatedCorrect}
                variant="VALIDATING_ICON"
                onChangeText={onChange}
                value={value}
                placeholder="1234 5678 0123"
                label="Aadhar Number"
              />
            );
          }}
          name="aadharNumber"
        />
        {errors.aadharNumber && (
          <Text style={styles.error}>
            {errors.aadharNumber.message || '*Aadhar Number is required.'}
          </Text>
        )}
        <SizedBox height={12} />
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i,
              message: 'Invalid PAN Number',
            },
          }}
          render={({field: {onChange, value}}) => {
            validatePAN(value);
            return (
              <TextInput
                autoCapitalize="characters"
                isValid={isPANCardValid}
                Icon={ValidatedCorrect}
                variant="VALIDATING_ICON"
                onChangeText={onChange}
                value={value}
                placeholder="ABCD1234E"
                label="PAN Number"
              />
            );
          }}
          name="panNumber"
        />
        {errors.panNumber && (
          <Text style={styles.error}>
            {errors.panNumber.message || '*PAN Number is required.'}
          </Text>
        )}
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
          isDisabled={(Object.keys(errors).length || !isValid) > 0}>
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
