import {RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type OnboardingStackParamList = {
  OnboardingStep1: undefined;
  OnboardingStep2: undefined;
  OnboardingSuccess:
    | {
        message: string;
      }
    | undefined;
};

export type OnChangeTextEvent = {
  target: {
    name: string;
    value: string;
  };
  type: string;
};

export type Form1Inputs = {
  ownerName: string;
  emailAddress: string;
  aadharNumber: string;
  panNumber: string;
  dateOfBirth: string;
};

export type OnboardingStep2Props = NativeStackScreenProps<
  OnboardingStackParamList,
  'OnboardingStep2'
>;
export type OnboardingStep1Props = NativeStackScreenProps<
  OnboardingStackParamList,
  'OnboardingStep1'
>;
export type OnboardingSuccessProps = NativeStackScreenProps<
  OnboardingStackParamList,
  'OnboardingSuccess'
>;
export type OnboardingSuccessRouteProp = RouteProp<
  OnboardingStackParamList,
  'OnboardingSuccess'
>;
