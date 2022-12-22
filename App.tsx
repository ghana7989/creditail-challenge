import React from 'react';
import {LogBox} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Onboarding from './src/containers/Onboarding';
import {RootStackParamList} from './src/types/stack';

const RootStack = createNativeStackNavigator<RootStackParamList>();

LogBox.ignoreLogs(['node_modules']); //Hide warnings

LogBox.ignoreAllLogs(); //Hide all warning notifications on front-end
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
