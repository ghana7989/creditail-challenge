import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Header from '../../components/Header';
import OnboardingStep1 from './screens/OnboardingStep1.screen';
import {OnboardingStackParamList} from './types';
import OnboardingStep2 from './screens/OnboardingStep2.screen';
import OnboardingSuccess from './screens/OnboardingSuccess.screen';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();
const Onboarding = () => {
  return (
    <OnboardingStack.Navigator
      initialRouteName="OnboardingStep2"
      screenOptions={{
        header() {
          return <Header />;
        },
      }}>
      <OnboardingStack.Screen
        name="OnboardingStep1"
        component={OnboardingStep1}
      />
      <OnboardingStack.Screen
        name="OnboardingStep2"
        component={OnboardingStep2}
      />
      <OnboardingStack.Screen
        name="OnboardingSuccess"
        component={OnboardingSuccess}
        options={{
          headerShown: false,
        }}
      />
    </OnboardingStack.Navigator>
  );
};

export default Onboarding;
