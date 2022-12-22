import {NavigatorScreenParams} from '@react-navigation/native';
import {OnboardingStackParamList} from 'src/containers/Onboarding/types';

export type RootStackParamList = {
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
};
