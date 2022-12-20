import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Header from '../../components/Header';
import OnboardingStep1 from './screens/OnboardingStep1.screen';
import {OnboardingStackParamList} from './types';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();
const Onboarding = () => {
  return (
    <OnboardingStack.Navigator
      initialRouteName="OnboardingStep1"
      screenOptions={{
        header() {
          return <Header />;
        },
      }}>
      <OnboardingStack.Screen
        name="OnboardingStep1"
        component={OnboardingStep1}
      />
    </OnboardingStack.Navigator>
  );
};

export default Onboarding;
